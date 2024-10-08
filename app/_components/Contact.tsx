import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contact me</Badge>
            <h2 
                className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-[#ddc67a]" 
            >
                I will be happy to work with you.       
            </h2>
            <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard 
                    url="https://linkedin.com/mikaelvery"
                    name="Mikael Very" 
                    image="/me.jpg"
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" 
                    description="66 contacts"
                />
                <ContactCard 
                    url="mailto:mikael.very34@gmail.com"
                    name="contact@me.com"  
                    image="/me.jpg"
                    mediumImage="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" 
                    description="Email me for any inquiries."
                />
            </div>
        </Section>
    );
};
