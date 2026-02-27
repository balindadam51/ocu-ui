import Image from "next/image";

function SocialIcon({label}: { label: string }) {
    return (
        <a
            href="#"
            aria-label={label}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/70 text-white hover:bg-white/10"
        >
            {label.slice(0, 1)}
        </a>
    );
}

export function FooterOUC() {
    return (
        <footer className="relative overflow-hidden">
            {/* gradient background */}
            <div className="bg-gradient-to-r from-[#0b6ea8] via-[#0b6ea8] to-[#2f8b4a]">
                {/* big soft wave overlay */}
                <svg
                    className="absolute right-[-240px] top-[-180px] h-[520px] w-[980px] opacity-30"
                    viewBox="0 0 1200 600"
                >
                    <path
                        d="M0,420 C250,320 500,520 760,420 C980,335 1070,250 1200,220 L1200,600 L0,600 Z"
                        fill="white"
                    />
                </svg>

                <div className="container-max relative py-14">
                    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                        <div>
                            <Image
                                src="https://www.ouc.com/wp-content/uploads/2024/08/OUC-Logo.webp"
                                alt="OUC"
                                width={170}
                                height={44}
                            />

                            <div className="mt-6 flex items-center gap-3">
                                <SocialIcon label="f"/>
                                <SocialIcon label="X"/>
                                <SocialIcon label="i"/>
                                <SocialIcon label="▶"/>
                                <SocialIcon label="in"/>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-12 text-[22px] font-semibold text-white">
                            <a href="#" className="hover:opacity-90">Newsroom</a>
                            <a href="#" className="hover:opacity-90">Government Relations &amp; Financials</a>
                            <a href="#" className="hover:opacity-90">Doing Business with OUC</a>
                        </div>
                    </div>

                    <div className="mt-14 flex items-center justify-between text-white">
                        <div className="text-[22px] font-semibold">
                            Copyright © 2026 Orlando Utilities Commission. All rights reserved.
                        </div>
                        <a href="#" className="text-[22px] font-semibold hover:opacity-90">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}