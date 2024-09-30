import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { NextJsIcon } from "./icons/NextJsIcon";
import Link from "next/link";
import Image from "next/image";

const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
    return (
        <span className={cn("bg-accent/30 font-mono border hover:bh-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm", className)} {...props} />
    );
};

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Mikael Very</h2>
                <h3 className="text-3xl font-caption">Developper Fullstack</h3>
                <p className="text-base">
                    I love creating my portfolio with{" "}
                    <Link href="https://nextjs.org/">
                        <Code className="inline-flex items-center gap-1">
                            <NextJsIcon size={16} className="inline" />Next.js
                        </Code>
                    </Link>, currently working at{" "}
                    <Link href="https://nextjs.org/">
                        <Code className="inline-flex items-center gap-1">
                            <NextJsIcon size={16} className="inline" />Beweb
                        </Code>
                    </Link>, Living in{" "}
                    <Link href="https://www.linkedin.com/in/mikaelvery/">
                        <Code className="inline-flex items-center gap-1">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
                                width={16}
                                height={16}
                                alt="france flag"
                            />Montpellier
                        </Code>
                    </Link>
                </p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4E35AQF1tZI8G1LHwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722945642571?e=1728306000&v=beta&t=Y82xy_sOCb9PYddxwPL708shyRjmz1BKeXVWI_r11tY"
                    className="w-full h-auto max-w-xs rounded-full max-md:w-56"
                    width={200}
                    height={200}
                    alt="mikael picture"
                />
            </div>
        </Section>
    );
};
