import Image from "next/image";

const resources = [
    {
        title: "Set Up Alerts",
        desc: "Receive notifications about your usage and bill reminders.",
        href: "/account/ouc-alerts",
        imageUrl: null,
    },
    {
        title: "Payment Assistance",
        desc: "Options when you need some help paying your bill.",
        href: "/customer-service/financial-medical-assistance",
        imageUrl: null,
    },
    {
        title: "Apply for a Rebate",
        desc: "Get cash back for home upgrades, appliances and more.",
        href: "/solutions-programs/saving-solutions/rebates",
        imageUrl: null,
    },
    {
        title: "Weather & Safety Tips",
        desc: "Steps you can take to keep your family and your home safe during extreme cold.",
        href: "/customer-service/weather-safety-tips",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2026/01/Cold-Weather.webp",
    },
    {
        title: "Usage Dashboard",
        desc: "Track electric and water usage and better understand your bill.",
        href: "/account/usage-dashboard",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/Hero_Usage-Dashboard.webp",
    },
    {
        title: "Explore OUC Careers",
        desc: "Power your future with a career at OUC.",
        href: "https://ouc.csod.com",
        imageUrl: "https://www.ouc.com/wp-content/uploads/2024/12/Careers-Image-OUC-1.webp",
    },
];

export function Resources() {
    return (
        <section className="bg-gray-50 py-10">
            <div className="container-max">
                <h2 className="text-xl font-semibold">OUC Resources</h2>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {resources.map((r) => (
                        <a
                            key={r.title}
                            href={r.href}
                            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md"
                        >
                            {r.imageUrl ? (
                                <div className="relative h-40 w-full">
                                    <Image src={r.imageUrl} alt={r.title} fill className="object-cover"/>
                                </div>
                            ) : (
                                <div className="h-3 w-full bg-[var(--ouc-blue)]"/>
                            )}

                            <div className="p-5">
                                <div className="text-base font-semibold group-hover:text-gray-900">{r.title}</div>
                                <p className="mt-2 text-sm text-gray-600">{r.desc}</p>
                                <div className="mt-4 text-sm font-medium text-[var(--ouc-blue)] group-hover:underline">
                                    Learn more
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}