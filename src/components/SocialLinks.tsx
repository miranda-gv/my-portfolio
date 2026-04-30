import SocialIconLink, { LinkedinIcon, FacebookIcon } from "./SocialIconLink";
import { socialLinks } from "@/data/social";

export default function SocialLinks({ className = "" }: { className?: string }) {
   return (
     <div className={`flex items-center gap-4 ${className}`}>
       {socialLinks.map((social) => (
         <SocialIconLink key={social.name} href={social.url} label={social.name}>
           {social.name === 'LinkedIn' ? <LinkedinIcon /> : <FacebookIcon />}
         </SocialIconLink>
       ))}
     </div>
   );
}
