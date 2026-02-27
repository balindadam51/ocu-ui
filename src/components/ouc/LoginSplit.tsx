"use client";

import React, {useMemo, useState} from "react";
import {useRouter} from "next/navigation";

import usersData from "@/data/usersDataFake.json";
import {saveSession} from "@/lib/myoucSession";

type Tile = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

type UsersDb = Record<
    string,
    {
        customerName: string;
        addressLines: string[];
        email: string;
        phoneNumbers: Record<string, string>;
    }
>;

function ArrowCircle() {
    return (
        <span
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--ouc-primary)] text-[var(--ouc-primary)]">
      →
    </span>
    );
}

function TileRow({t}: { t: Tile }) {
    return (
        <a
            href={t.href}
            className="group flex items-center justify-between rounded-md bg-white px-6 py-5 shadow-[var(--ouc-shadow)] ring-1 ring-black/10 hover:shadow-md"
        >
            <div className="flex items-center gap-5">
                <div className="h-14 w-[6px] rounded bg-[var(--ouc-green)]"/>
                <div className="grid h-12 w-12 place-items-center text-[var(--ouc-primary)]">
                    {t.icon}
                </div>
                <div className="text-[16px] font-[850] uppercase tracking-wide text-[var(--ouc-primary)]">
                    {t.label}
                </div>
            </div>

            <div className="opacity-90 group-hover:opacity-100">
                <ArrowCircle/>
            </div>
        </a>
    );
}

function IconBill() {
    return (
        <svg width="34" height="34" viewBox="0 0 44 44" fill="none">
            <path
                d="M33.1111 24.2222H42V38C42 40.2091 40.2091 42 38 42H7C4.23858 42 2 39.7614 2 37V2L9.77778 6.44444L17.5556 2L25.3333 6.44444L33.1111 2V37.5556C33.1111 40.0102 35.101 42 37.5556 42V42"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.0002 16.4445H16.4447C14.6037 16.4445 13.1113 17.9368 13.1113 19.7778C13.1113 21.6187 14.6037 23.1111 16.4447 23.1111H18.6669C20.5078 23.1111 22.0002 24.6035 22.0002 26.4445C22.0002 28.2854 20.5078 29.7778 18.6669 29.7778H13.1113"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M17.5557 13.1112V16.4445" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M17.5557 33.111V30.8888" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
    );
}

function IconTruck() {
    return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
                <path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/>
                <path
                    d="M14.5 17.5h-5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5m.5-9h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M2 13v2c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4"/>
            </g>
        </svg>
    );
}

function IconAlert() {
    return (
        <svg width="34" height="34" viewBox="0 0 44 38" fill="none">
            <path d="M2 36.7368L22 2L42 36.7368H2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M22 12v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M22 28h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
    );
}

function IconEmail() {
    return (
        <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
            <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M36 15h8v26H4V15h8m12 4V5m6 6l-6-6l-6 6"/>
                <path d="m4 15l20 15l20-15"/>
            </g>
        </svg>
    );
}

export function LoginSplit() {
    const router = useRouter();
    const db = usersData as UsersDb;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pwVisible, setPwVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const normalizedUsername = useMemo(() => username.trim().toLowerCase(), [username]);

    const tiles: Tile[] = [
        {label: "PAY MY BILL", href: "/account/pay-my-bill/", icon: <IconBill/>},
        {label: "START / STOP / MOVE SERVICE", href: "/account/start-stop-move/", icon: <IconTruck/>},
        {label: "REPORT AN OUTAGE OR A PROBLEM", href: "/customer-service/report-outage-problem/", icon: <IconAlert/>},
        {label: "CONTACT US", href: "/contact/", icon: <IconEmail/>},
    ];

    const handleLogin = () => {
        setError(null);

        if (!normalizedUsername) return setError("Username is required.");
        if (!password.trim()) return setError("Password is required.");

        const user = db[normalizedUsername];
        if (!user) return setError("User not found. Access denied.");

        saveSession({
            username: normalizedUsername,
            customerName: user.customerName,
            addressLines: user.addressLines,
            email: user.email,
            phoneNumbers: user.phoneNumbers ?? {},
        });

        router.push("/myouc/account-summary");
    };

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT PANEL */}
                <div className="bg-[var(--ouc-light)]">
                    <div className="container-max py-20">
                        <h2 className="text-[56px] font-[300] tracking-tight text-[var(--ouc-dark-blue)]">
                            Log in to myOUC
                        </h2>

                        <div className="mt-10 max-w-[640px] space-y-6">
                            <div>
                                <label className="block text-[18px] font-[500] text-gray-800">
                                    Username
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    className="mt-3 w-full rounded-md border border-gray-300 bg-white px-6 py-4 text-[18px] outline-none focus:ring-2 focus:ring-[var(--ouc-primary)]"
                                />
                            </div>

                            <div>
                                <label className="block text-[18px] font-[500] text-gray-800">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={pwVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="mt-3 w-full rounded-md border border-gray-300 bg-white px-6 py-4 pr-14 text-[18px] outline-none focus:ring-2 focus:ring-[var(--ouc-primary)]"
                                    />
                                    <button
                                        type="button"
                                        aria-label={pwVisible ? "Hide password" : "Show password"}
                                        onClick={() => setPwVisible((v) => !v)}
                                        className="absolute right-4 top-[55%] -translate-y-1/2 text-[var(--ouc-primary)]"
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>

                            {/* Forgot links (right aligned + blue like original) */}
                            <div className="flex justify-end gap-8 text-[18px] text-[var(--ouc-primary)]">
                                <a
                                    href="https://my.ouc.com/myouc/ForgotUsername_Form"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    Forgot Username?
                                </a>
                                <a
                                    href="https://my.ouc.com/myouc/ForgotPassword_Form"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            {error && (
                                <div
                                    className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[16px] text-red-700">
                                    {error}
                                </div>
                            )}

                            {/* Buttons row (LOG IN pill + REGISTER link) */}
                            <div className="mt-10 flex items-center gap-12">
                                <button
                                    type="button"
                                    onClick={handleLogin}
                                    className="rounded-full bg-[var(--ouc-primary)] px-14 py-4 text-[18px] font-[850] uppercase text-white shadow-[var(--ouc-shadow)] hover:brightness-95"
                                >
                                    LOG IN
                                </button>

                                <a
                                    href="https://my.ouc.com/myouc/Enrollment_Form"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-[18px] font-[850] uppercase text-[var(--ouc-primary)] hover:underline"
                                >
                                    REGISTER <ArrowCircle/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-white">
                    <div className="container-max py-20">
                        <div className="mx-auto max-w-[720px] space-y-10 pt-8">
                            {tiles.map((t) => (
                                <TileRow key={t.label} t={t}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}