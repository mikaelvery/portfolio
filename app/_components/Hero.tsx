import { Section } from "./Section";
import { NextJsIcon } from "./icons/NextJsIcon";
import Link from "next/link";
import Image from "next/image";
import { Code } from "./Code";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-1">
                <h2 className="font-caption font-bold text-5xl text-primary" style={{ textShadow: "0 0 15px rgba(0, 255, 255, 0.6)" }}>Mikael Very</h2>
                <h3 className="text-3xl font-caption">Developper Fullstack</h3>
                <p className="text-base">
                    Passionate about building innovative solutions. Currently working at{" "}
                    <Link href="https://nextjs.org/">
                        <Code className="inline-flex items-center gap-1">
                            <NextJsIcon size={16} className="inline" />2S Agency
                        </Code>
                    </Link>. Living in{" "}
                    <Link href="https://www.linkedin.com/in/mikaelvery/">
                        <Code className="inline-flex items-center gap-1">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%93present%29.svg.png"
                                width={16}
                                height={16}
                                alt="france flag"
                            />Montpellier
                        </Code>
                    </Link>. Let&apos;s collaborate on exciting projects!
                </p>
                <Link href="/about" className="mt-4">
                    <button className="py-2 px-4 rounded-lg border border-white text-white hover:bg-accent/50 transition-colors text-sm" style={{ textShadow: "0 0 15px rgba(0, 255, 255, 0.6)" }}>
                        Learn More About Me
                    </button>
                </Link>
            </div>
            <div className="flex-[1] max-md:m-auto ml-auto">
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
