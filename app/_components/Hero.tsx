import { Section } from "./Section";
import { NextJsIcon } from "./icons/NextJsIcon";
import Link from "next/link";
import Image from "next/image";
import { Code } from "./Code";
import { DownloadIcon } from "lucide-react";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-0.5">
                <h2 className="font-caption font-bold text-5xl text-[#ddc67a]">
                    Mikael Very
                </h2>
                <h3 className="text-3xl font-caption -mt-2">Fullstack Developer</h3>
                <p className="text-base py-2">
                    Passionate about building innovative solutions. Previously at{" "}
                    <Link href="https://www.2sagency.com/" passHref>
                        <Code className="inline-flex items-center gap-1">
                            2S Agency
                        </Code>
                    </Link>.<br /> Living in{" "}
                    <Link href="https://www.linkedin.com/in/mikaelvery/" passHref>
                        <Code className="inline-flex items-center gap-1">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%93present%29.svg.png"
                                width={16}
                                height={16}
                                alt="French flag"
                            />
                            Montpellier
                        </Code>
                    </Link>. Let&apos;s collaborate on exciting projects!
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                    <Link href="/about">
                        <button className="py-2 px-3 text-sm rounded-lg text-[#253737] bg-[#efebe2] hover:bg-[#e0dbc8] transition-all duration-300 transform hover:scale-105 shadow-lg border border-[#253737] max-sm:py-1 max-sm:px-2 max-sm:text-xs">
                            Learn More About Me
                        </button>
                    </Link>
                    <Link href="/CV_very_mikael.pdf" download>
                        <button className="flex items-center py-2 px-3 text-sm rounded-lg text-[#efebe2] bg-transparent hover:bg-[#253737] transition-all duration-300 transform hover:scale-105 border border-[#efebe2] max-sm:py-1 max-sm:px-2 max-sm:text-xs">
                            <DownloadIcon className="mr-1" size={14} />
                            Download CV
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex-[1] max-md:m-auto ml-auto">
                <Image
                    src="https://pbs.twimg.com/profile_images/1624453066916261892/mk0g02MB_400x400.jpg"
                    className="w-full h-auto max-w-xs rounded-full max-md:w-56"
                    width={200}
                    height={200}
                    alt="mikael picture"
                />
            </div>
        </Section>
    );
};
