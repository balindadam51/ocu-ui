"use client";

import Image from "next/image";
import {useMemo, useState} from "react";

type Card = { title: string; desc: string; image: string };

function ProgramCard({c}: { c: Card }) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/10">
            <div className="relative h-[220px]">
                <Image src={c.image} alt={c.title} fill className="object-cover"/>
            </div>
            <div className="p-10">
                <div className="text-[34px] font-light text-[var(--ouc-text-blue)] leading-tight">
                    {c.title}
                </div>
                <p className="mt-6 text-[18px] text-gray-700">{c.desc}</p>
                <a href="#"
                   className="mt-10 inline-flex items-center gap-3 text-[14px] font-semibold tracking-wide text-[var(--ouc-text-blue)]">
                    LEARN MORE <span
                    className="grid h-7 w-7 place-items-center rounded-full border border-[var(--ouc-text-blue)]">→</span>
                </a>
            </div>
        </div>
    );
}

export function ProgramsCarousel() {
    const pages = useMemo<Card[][]>(
        () => [
            [
                {
                    title: "Electric Vehicle\nPrograms",
                    desc: "A variety of programs for EV drivers and fleet managers.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/11/electric-vehicle.webp",
                },
                {
                    title: "Home Warranty\nPrograms",
                    desc: "Protection from risks not covered by homeowners’ insurance.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/11/home-warranty.webp",
                },
                {
                    title: "Business Solutions",
                    desc: "Innovative programs and services for commercial customers.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/12/SunChoice-for-Business.webp",
                },
            ],
            [
                {
                    title: "Savings Solutions",
                    desc: "Rebates and programs to help you save energy and money.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/12/Related_Rebates.webp",
                },
                {
                    title: "Solar Initiatives",
                    desc: "Explore solar programs and renewable options.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/12/Solar-Initaitives.webp",
                },
                {
                    title: "Billing Programs",
                    desc: "Tools and billing options designed around your needs.",
                    image: "https://www.ouc.com/wp-content/uploads/2024/12/Related-Content_Budget-Billing.webp",
                },
            ],
        ],
        []
    );

    const [idx, setIdx] = useState(0);

    return (
        <section className="py-10">
            <div className="container-max">
                <h2 className="text-center text-[52px] font-light text-[var(--ouc-text-blue)]">
                    Customer Solutions and Programs
                </h2>

                <div className="mt-14 grid gap-10 md:grid-cols-3">
                    {pages[idx].map((c) => (
                        <ProgramCard key={c.title} c={c}/>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-6 text-[18px] text-[var(--ouc-text-blue)]">
                    <button
                        className="text-[28px] leading-none hover:opacity-80"
                        onClick={() => setIdx((v) => (v === 0 ? pages.length - 1 : v - 1))}
                        aria-label="Prev"
                    >
                        ←
                    </button>
                    <div className="text-gray-700">
                        <span className="text-[var(--ouc-text-blue)] font-semibold">{idx + 1}</span> of{" "}
                        <span className="text-[var(--ouc-text-blue)] font-semibold">{pages.length}</span>
                    </div>
                    <button
                        className="text-[28px] leading-none hover:opacity-80"
                        onClick={() => setIdx((v) => (v === pages.length - 1 ? 0 : v + 1))}
                        aria-label="Next"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}