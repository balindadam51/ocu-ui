import Image from "next/image";

function NewsCard({image, title, desc}: { image: string; title: string; desc: string }) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/10">
            <div className="relative h-[320px]">
                <Image src={image} alt={title} fill className="object-cover"/>
            </div>
            <div className="p-10 text-center">
                <div className="text-[34px] font-light text-[var(--ouc-text-blue)]">{title}</div>
                <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-relaxed text-gray-700">
                    {desc}
                </p>
                <a href="#"
                   className="mt-10 inline-flex items-center gap-3 text-[14px] font-semibold tracking-wide text-[var(--ouc-text-blue)]">
                    LEARN MORE <span
                    className="grid h-7 w-7 place-items-center rounded-full border border-[var(--ouc-text-blue)]">→</span>
                </a>
            </div>
        </div>
    );
}

export function NewsTiles() {
    return (
        <section className="py-12">
            <div className="container-max">
                <h2 className="text-center text-[52px] font-light text-[var(--ouc-text-blue)]">
                    Stay Informed with OUC News and Updates
                </h2>

                <div className="mt-14 grid gap-10 md:grid-cols-2">
                    <NewsCard
                        image="https://www.ouc.com/wp-content/uploads/2024/11/Newsroom-Image-Two.webp"
                        title="Newsroom"
                        desc="Discover how OUC is constantly working to improve reliability for our customers."
                    />
                    <NewsCard
                        image="https://www.ouc.com/wp-content/uploads/2024/08/Blog-Image-1.webp"
                        title="OUC Blog"
                        desc="Learn about our remarkable people, innovative programs and commitment to the community to deliver affordable, resilient, sustainable and reliable electricity and water."
                    />
                </div>
            </div>
        </section>
    );
}