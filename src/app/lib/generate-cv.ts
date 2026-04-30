/**
 * Client-side CV download utility
 *
 * Triggers the API route to generate a PDF CV and initiates a browser download.
 * Creates a temporary anchor element to handle the download without page navigation.
 *
 * @returns Promise that resolves when download is initiated
 */
export async function generateCV() {
  const response = await fetch("/api/generate-cv");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Miranda-George-CV.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
