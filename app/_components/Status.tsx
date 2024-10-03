import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { Work, WORKS } from "./WorkProps";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) =>(
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
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Works</p>
                <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) =>(
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard 
                        name="@mikaelvery" 
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" 
                        description="66"
                    />
                    <ContactCard 
                        name="@mikaelvery" 
                        image="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                        mediumImage="https://img.freepik.com/vecteurs-premium/icone-logo-vectoriel-instagram-logotype-medias-sociaux_901408-390.jpg?semt=ais_hybrid" 
                        description="300"
                    />
                </Card>
            </div>
        </Section>
    );
};