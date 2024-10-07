import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { SymfonyIcon } from "./icons/Symfony";
import { AngularIcon } from "./icons/AngularIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NodeJsIcon } from "./icons/NodeJsIcon";
import { CSharpIcon } from "./icons/CSharpIcon";
import { FlutterIcon } from "./icons/FlutterIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 
                className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-[#ddc67a]" 
                >
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon 
                        size={42} 
                        className="animate-spin" 
                        style={{
                            animationDuration: "10s",
                        }}
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        React
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I use <Code>React</Code> in my school projects and work experience. I also use <Code>Next.js</Code> as a fullstack framework for both backend and frontend development.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I can quickly build beautiful applications using <Code>TailwindCSS</Code>, ensuring responsive and modern designs.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <AngularIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        Angular
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I worked with <Code>Angular</Code> on a school project called <u>ImmoIa</u>, developing dynamic and interactive web applications.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <SymfonyIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        Symfony
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I have used <Code>Symfony</Code> during my work experience, building back-end systems and APIs.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <HtmlIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        Html
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I use <Code>HTML</Code> and <Code>CSS</Code> in my school projects, creating responsive and accessible web pages.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <NodeJsIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        NodeJs
                    </h3>
                    <p className="text-sm text-muted-foreground">
                       I worked with <Code>Node.js</Code> in school projects, building server-side logic and RESTful APIs.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <CSharpIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        .NET
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I implemented a real-time messaging microservice using <Code>SignalR</Code> in the <u>ImmoIa</u> project. This feature facilitated instant communication between users, enhancing the back-end infrastructure.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <FlutterIcon 
                        size={42} 
                    /> 
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#efebe2]">
                        Flutter
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I have developed several applications using <Code>Flutter</Code>,
                        including a pizzeria application that offers real-time GPS delivery tracking via the Google Maps Web API.
                    </p>
                </div>
            </div>
        </Section>     
    );
};
