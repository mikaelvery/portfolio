import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { Work, WORKS } from "./WorkProps";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="w-full p-4 flex flex-col gap-2 shadow-lg border border-[#efebe2] rounded-md">
                    <p className="text-lg font-semibold text-[#ddc67a]">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="p-4 flex-1 shadow-md">
                    <p className="text-lg font-semibold text-[#ddc67a]">Works</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2 shadow-md">
                    <p className="text-lg font-semibold text-[#ddc67a]">Follow me</p>
                    <ContactCard 
                        className="flex-1"
                        url="https://www.linkedin.com/in/mikaelvery/"
                        name="Mikael Very" 
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" 
                        description="Connect with me on LinkedIn"
                    />
                    <ContactCard
                        className="flex-1"
                        url="mailto:mikael.very34@gmail.com"
                        name="me@mikaelvery.com"
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" 
                        description="Email me for any inquiries."
                    />
                </Card>
            </div>
        </Section>
    );
};
