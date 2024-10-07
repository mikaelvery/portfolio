import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Section } from "./Section";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-card py-8">
      <Section className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">© 2024 Mikael Very. All rights reserved.</p>

        <div className="flex gap-6">
            <Link href="https://github.com/MikaelVery" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-6 h-6 text-[#ddc67a] hover:text-[#efebe2] transition-colors duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/mikaelvery/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-[#ddc67a] hover:text-[#efebe2] transition-colors duration-200" />
            </Link>
        </div>

        <p className="text-xs text-muted-foreground">
            Made with <span className="text-accent">React</span> & <span className="text-accent">Next.js</span>
        </p>
      </Section>
    </footer>
  );
};
