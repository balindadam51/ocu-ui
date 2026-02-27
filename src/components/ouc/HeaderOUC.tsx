const quickLinks = [
    {label: "CAREERS", href: "https://www.ouc.com/about/careers"},
    {label: "BUSINESS", href: "https://www.ouc.com/solutions-programs/business/"},
    {label: "CONTACT OUC", href: "https://www.ouc.com/contact/"},
];

const mainLinks = [
    {label: "MY ACCOUNT", href: "#", chevron: true},
    {label: "BILLING & PAYMENT", href: "#", chevron: true},
    {label: "SERVICE REQUESTS", href: "#", chevron: true},
    {label: "OUTAGES & PROBLEMS", href: "#", chevron: true},
    {label: "REBATES & SAVINGS", href: "#", chevron: true},
    {label: "ALERTS", href: "#", chevron: true},
];

function Chevron() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M7 10l5 5 5-5"
                fill="none"
                stroke="var(--ouc-green)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function HeaderOUC() {
    return (
        <header className="bg-white">
            {/* FIRST ROW */}
            <div className="border-b border-gray-100">
                <div className="container-max">
                    <div className="flex items-center justify-between py-6">
                        {/* Logo */}
                        <a href="https://www.ouc.com/" className="flex items-center">
                            <img
                                src="https://www.ouc.com/wp-content/uploads/2024/11/ouc-logo-color.png"
                                alt="OUC - The Reliable One"
                                className="h-[64px] w-auto"
                            />
                        </a>

                        {/* Quick links (center) */}
                        <nav className="hidden lg:flex items-center">
                            <div
                                className="flex items-center text-[18px] font-[900] uppercase tracking-wide text-[var(--ouc-primary)]">
                                {quickLinks.map((l, idx) => (
                                    <div key={l.label} className="flex items-center">
                                        <a href={l.href} className="whitespace-nowrap hover:opacity-80">
                                            {l.label}
                                        </a>
                                        {idx !== quickLinks.length - 1 ? (
                                            <span className="mx-10 h-6 w-px bg-gray-200"/>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Language toggle + logout */}
                        <div className="flex items-center gap-10">
                            <div className="hidden lg:flex items-center gap-4">
                                <span className="text-[18px] text-[var(--ouc-primary)]">English</span>

                                <div
                                    className="relative h-9 w-16 rounded-full bg-white shadow-[var(--ouc-shadow)] ring-1 ring-black/10">
                                    <div className="absolute left-1 top-1 h-7 w-7 rounded-full bg-[var(--ouc-green)]"/>
                                </div>

                                <span className="text-[18px] text-[var(--ouc-primary)]">Español</span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center whitespace-nowrap rounded-full bg-[var(--ouc-green)] px-12 py-3 text-[18px] font-[850] text-white hover:brightness-95"
                            >
                                LOG IN <span className="ml-3">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECOND ROW (pill menu) */}
            <div className="container-max">
                <div
                    className="mx-auto my-6 max-w-[1240px] rounded-full bg-white px-10 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                    {/* IMPORTANT: keep search INSIDE pill by making one flex row and allowing nav to shrink */}
                    <div className="flex items-center overflow-hidden">
                        {/* Nav that can shrink */}
                        <nav className="min-w-0 flex-1">
                            <ul className="flex items-center justify-center gap-14">
                                {mainLinks.map((l) => (
                                    <li key={l.label} className="shrink-0">
                                        <a
                                            href={l.href}
                                            className="flex items-center gap-2 whitespace-nowrap text-[15px] font-[850] uppercase tracking-wide text-[var(--ouc-primary)] hover:opacity-80"
                                        >
                                            <span>{l.label}</span>
                                            {l.chevron ? <Chevron/> : null}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Search pinned INSIDE pill */}
                        <button
                            aria-label="Site search"
                            className="ml-8 shrink-0 grid h-11 w-11 place-items-center rounded-full bg-[var(--ouc-green)] text-white shadow-[var(--ouc-shadow)] hover:brightness-95"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M21 21l-4.3-4.3"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}