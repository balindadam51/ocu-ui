import Image from "next/image";

export function CareersBanner() {
    return (
        <section className="py-12">
            <div className="container-max">
                <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/10">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-[430px]">
                            <Image
                                src="https://www.ouc.com/wp-content/uploads/2024/12/Careers-Image-OUC-1.webp"
                                alt="Explore OUC Careers"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-14">
                            <h3 className="text-[54px] font-light text-[var(--ouc-text-blue)]">
                                Explore OUC Careers
                            </h3>
                            <p className="mt-6 text-[18px] leading-relaxed text-gray-700">
                                Power your future with a career at OUC! Explore opportunities in professional,
                                skilled trades, and leadership roles, and grow with a company that empowers you to
                                succeed.
                            </p>

                            <a
                                href="#"
                                className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--ouc-blue)] px-12 py-4 text-[16px] font-semibold text-white hover:bg-[var(--ouc-blue-dark)]"
                            >
                                SEE JOB OPENINGS <span className="ml-3">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}