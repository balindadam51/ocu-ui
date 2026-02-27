import Image from "next/image";

const programs = [
    {
        title: "Electric Vehicle Programs",
        href: "/solutions-programs/electric-vehicle-programs",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/11/electric-vehicle.webp"
    },
    {
        title: "Home Warranty Programs",
        href: "/solutions-programs/home-warranty-programs",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/11/home-warranty.webp"
    },
    {
        title: "Business Solutions",
        href: "/business",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/SunChoice-for-Business.webp"
    },
    {
        title: "Savings Solutions",
        href: "/solutions-programs/saving-solutions",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/Related_Rebates.webp"
    },
    {
        title: "Solar Programs",
        href: "/solutions-programs/solar-programs",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/Solar-Initaitives.webp"
    },
    {
        title: "Billing Programs",
        href: "/solutions-programs/billing-programs",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/Related-Content_Budget-Billing.webp"
    },
];

export function Programs() {
    return (
        <section className="py-10">
            <div className="container-max">
                <h2 className="text-xl font-semibold">Customer Solutions and Programs</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {programs.map((p) => (
                        <a key={p.title} href={p.href}
                           className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md">
                            <div className="relative h-44 w-full">
                                <Image src={p.imageUrl} alt={p.title} fill
                                       className="object-cover transition group-hover:scale-[1.02]"/>
                            </div>
                            <div className="p-5">
                                <div className="text-base font-semibold">{p.title}</div>
                                <div
                                    className="mt-3 text-sm font-medium text-[var(--ouc-blue)] group-hover:underline">learn
                                    more
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}