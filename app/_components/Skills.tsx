import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";

export const Skills = () => {
    return (
        <Section className=" flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love workin on...           
            </h2>
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12">
                    <svg className="w-5 h-5 text-primary-foreground lg:w-6 lg:h-6" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd" 
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" 
                        clip-rule="evenodd"
                    ></path>
              </svg>
                </div>
            <h3 className="mb-2 text-2xl font-semibold tracking-tight">NextJs</h3>
            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit recusandae et in saepe qui fuga dolorem repellat, alias adipisci delectus dicta accusamus illo consectetur quisquam fugit molestias possimus magnam.</p>
        </div>
        </Section>
        
    );
};