import SocialIconLink, { LinkedinIcon, FacebookIcon, GithubIcon } from "./SocialIconLink";
import { socialLinks } from "@/data/social";

/**
 * Config-driven icon mapping for social links
 * Add new social networks here to automatically render in SocialLinks
 */
const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
  GitHub: GithubIcon,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
   return (
     <div className={`flex items-center gap-4 ${className}`}>
       {socialLinks.map((social) => {
         const IconComponent = socialIconMap[social.name];
         if (!IconComponent) return null;

         return (
           <SocialIconLink key={social.name} href={social.url} label={social.name}>
             <IconComponent />
           </SocialIconLink>
         );
       })}
     </div>
   );
}
