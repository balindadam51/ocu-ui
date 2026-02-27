import Image from "next/image";

export function HeroOUC() {
    return (
        <section className="relative">
            {/* HERO IMAGE */}
            <div className="relative h-[540px] w-full overflow-hidden">
                <Image
                    src="https://www.ouc.com/wp-content/uploads/2026/01/Cold-Weather-Hero2.webp"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                />
                {/* dark left fade like screenshot */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"/>

                <div className="container-max relative h-full">
                    <div className="pt-28">
                        <h1 className="max-w-[720px] text-[54px] font-light leading-[1.05] tracking-tight text-white">
                            Your Questions Answered:
                            <br/>
                            How Extreme Cold Put
                            <br/>
                            the Grid to the Test
                        </h1>

                        <p className="mt-6 max-w-[580px] text-[18px] font-medium text-white/90">
                            Find out why electric demand surged and why conservation was
                            critical to keeping power flowing.
                        </p>

                        <a
                            href="#"
                            className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--ouc-blue)] px-10 py-4 text-[16px] font-semibold text-white shadow hover:bg-[var(--ouc-blue-dark)]"
                        >
                            LEARN MORE <span className="ml-3">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* CURVE CUT (bottom of hero) */}
            <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0">
                <svg viewBox="0 0 1440 120" className="h-[110px] w-full">
                    <path
                        d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}