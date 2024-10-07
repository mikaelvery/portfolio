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
                    className="flex-1 rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    url="https://www.linkedin.com/in/mikaelvery/"
                    name="Mikael Very" 
                    image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" 
                    description="Connect with me on LinkedIn"
                />
                <ContactCard
                    className="flex-1 rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    url="mailto:mikael.very34@gmail.com"
                    name="contact@mikaelvery.com"
                    image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                    mediumImage="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" 
                    description="Email me for any inquiries."
                />
            </div>
        </Section>
    );
};
