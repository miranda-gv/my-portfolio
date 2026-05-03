import { NextResponse } from "next/server";
import jsPDF from "jspdf";
import { heroData } from "@/data/hero";
import { aboutData } from "@/data/about";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { getEmail, getPhone, contactData } from "@/data/contact";

/**
 * Strips diacritics/accents from text for PDF compatibility
 * @param text - Input string potentially containing accents
 * @returns Clean ASCII-compatible string
 */
const cleanText = (text: string): string =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/**
 * GET Route Handler - Generates a PDF CV
 *
 * Creates a comprehensive CV PDF using jsPDF with:
 * - Personal information from hero data
 * - Introduction/bio paragraphs
 * - Work experience with responsibilities
 * - Skills grouped by category
 * - Top 3 testimonials
 *
 * @returns NextResponse with PDF buffer and appropriate headers for download
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */
export async function GET() {
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;

  /**
   * Checks if content will overflow page and adds new page if needed
   * @param needed - Vertical space needed in mm
   */
  const checkPageBreak = (needed: number) => {
    if (y + needed > 270) {
      doc.addPage();
      y = 20;
    }
  };

  // Header section - Name, title, and contact info
  const emailAddress = getEmail();
  const phoneNumber = getPhone();

  doc.setFontSize(24);
  doc.text(cleanText(heroData.name), pageWidth / 2, y, { align: "center" });
  y += 10;

  doc.setFontSize(16);
  doc.text(cleanText(heroData.title), pageWidth / 2, y, { align: "center" });
  y += 15;

  doc.setFontSize(10);
  doc.text(
    [
      cleanText(emailAddress),
      cleanText(phoneNumber),
      cleanText(contactData.location),
    ],
    pageWidth / 2,
    y,
    { align: "center" },
  );
  y += 15;

  // Divider line
  doc.setDrawColor(200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // Bio/Introduction section
  if (aboutData.paragraphs.length > 0) {
    doc.setFontSize(12);
    const bioText = aboutData.paragraphs.join(" ");
    const bioLines = doc.splitTextToSize(cleanText(bioText), contentWidth);
    checkPageBreak(bioLines.length * 5);
    doc.text(bioLines, margin, y);
    y += bioLines.length * 5 + 10;
  }

  // Experience section
  checkPageBreak(20);
  doc.setFontSize(14);
  doc.text("Experience", margin, y);
  y += 8;

  experience.forEach((exp) => {
    checkPageBreak(15);
    doc.setFontSize(12);
    doc.text(cleanText(exp.title), margin, y);
    doc.text(cleanText(exp.dates), pageWidth - margin, y, { align: "right" });
    y += 6;

    doc.text(
      cleanText(exp.company) + " | " + cleanText(exp.location),
      margin,
      y,
    );
    y += 6;

    doc.setFontSize(10);
    exp.responsibilities.forEach((desc: string) => {
      checkPageBreak(5);
      const lines = doc.splitTextToSize(
        "• " + cleanText(desc),
        contentWidth - 5,
      );
      doc.text(lines, margin + 5, y);
      y += lines.length * 5;
    });
    y += 5;
  });

  y += 5;

  // Skills section - grouped by category
  checkPageBreak(20);
  doc.setFontSize(14);
  doc.text("Skills", margin, y);
  y += 8;

  doc.setFontSize(10);
  skills.forEach((skillGroup) => {
    checkPageBreak(10);
    doc.setFontSize(11);
    doc.text(cleanText(skillGroup.category) + ":", margin, y);
    y += 5;
    doc.setFontSize(10);
    const itemsText = skillGroup.items.join(", ");
    const lines = doc.splitTextToSize(cleanText(itemsText), contentWidth - 5);
    doc.text(lines, margin + 5, y);
    y += lines.length * 5 + 3;
  });

  // Testimonials section (top 3)
  if (testimonials && testimonials.length > 0) {
    y += 5;
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.text("Testimonials", margin, y);
    y += 8;

    doc.setFontSize(10);
    testimonials.slice(0, 3).forEach((t) => {
      checkPageBreak(15);
      const lines = doc.splitTextToSize(
        '"' + cleanText(t.text) + '"',
        contentWidth,
      );
      doc.text(lines, margin, y);
      y += lines.length * 5 + 3;
      doc.text("- " + cleanText(t.name) + ", " + cleanText(t.title), margin, y);
      y += 8;
    });
  }

  // Generate PDF buffer and return as downloadable response
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Miranda-George-CV.pdf",
    },
  });
}
