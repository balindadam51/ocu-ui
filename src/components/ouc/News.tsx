import Image from "next/image";

const items = [
    {
        title: "Newsroom",
        desc: "Discover how OUC is constantly working to improve reliability for our customers.",
        href: "/newsroom",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/11/Newsroom-Image-Two.webp",
    },
    {
        title: "OUC Blog",
        desc: "Learn about our remarkable people, innovative programs and commitment to the community.",
        href: "https://oucblog.com",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/08/Blog-Image-1.webp",
    },
];

export function News() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container-max">
                <h2 className="text-xl font-semibold">Stay Informed with OUC News and Updates</h2>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {items.map((n) => (
                        <a key={n.title} href={n.href}
                           className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md">
                            <div className="relative h-52 w-full">
                                <Image src={n.imageUrl} alt={n.title} fill className="object-cover"/>
                            </div>
                            <div className="p-5">
                                <div className="text-base font-semibold">{n.title}</div>
                                <p className="mt-2 text-sm text-gray-600">{n.desc}</p>
                                <div
                                    className="mt-4 text-sm font-medium text-[var(--ouc-blue)] group-hover:underline">Learn
                                    More
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}