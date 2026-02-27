"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clearSession, getSession, type MyOucSession } from "@/lib/myoucSession";

type PhoneType = "Primary" | "Home" | "Work" | "Mobile" | "Fax" | "Other";

function splitPhone(phone: string) {
    // expects "(786) 531-9343" or "786-531-9343" etc.
    const digits = (phone || "").replace(/\D/g, "");
    const area = digits.slice(0, 3);
    const mid = digits.slice(3, 6);
    const last = digits.slice(6, 10);
    return { area, mid, last, ext: "" };
}

export default function MyInfoPage() {
    const router = useRouter();
    const search = useSearchParams();

    const [session, setSession] = useState<MyOucSession | null>(null);
    const [tab, setTab] = useState<"general" | "password">(
        (search.get("tab") as any) === "password" ? "password" : "general"
    );

    // form state (pre-filled from session)
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");

    const [country, setCountry] = useState("UNITED STATES");
    const [addr1, setAddr1] = useState("");
    const [addr2, setAddr2] = useState("");
    const [city, setCity] = useState("");
    const [stateRegion, setStateRegion] = useState("Florida");
    const [zip, setZip] = useState("");

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    const [phoneType, setPhoneType] = useState<PhoneType>("Primary");
    const [phoneArea, setPhoneArea] = useState("");
    const [phoneMid, setPhoneMid] = useState("");
    const [phoneLast, setPhoneLast] = useState("");
    const [phoneExt, setPhoneExt] = useState("");

    const primaryPhoneLabel = useMemo(() => {
        if (!session) return "";
        const keys = Object.keys(session.phoneNumbers || {});
        const pick = keys.find((k) => k.toLowerCase() === "primary") ?? keys[0];
        return pick || "primary";
    }, [session]);

    useEffect(() => {
        const s = getSession();
        if (!s) {
            router.replace("/");
            return;
        }
        setSession(s);

        // identity
        setFullName(s.customerName || "");
        setUsername(s.username || "");

        // address lines
        const lines = s.addressLines || [];
        // best-effort mapping from your fake data
        // expected: [line1, line2?, "CITY, ST ZIP", "UNITED STATES"] or similar
        const line1 = lines[0] || "";
        const line2 = lines[1] || "";
        const line3 = lines[2] || "";
        const line4 = lines[3] || "";

        setAddr1(line1);
        setAddr2(line2);

        // parse city/state/zip from "ORLANDO, FL 32801"
        const m = line3.match(/^(.+?),\s*([A-Z]{2})\s+(\d{5})(?:-\d{4})?$/i);
        if (m) {
            setCity(m[1] || "");
            // keep stateRegion human-readable like original screenshot
            const st = (m[2] || "").toUpperCase();
            setStateRegion(st === "FL" ? "Florida" : st);
            setZip(m[3] || "");
        } else {
            // fallback: if line3 is just city
            setCity(line3 || "");
            setZip("");
        }

        // country
        const countryLine = (line4 || "").trim();
        if (countryLine) setCountry(countryLine.toUpperCase());

        // email
        setEmail(s.email || "");
        setConfirmEmail(s.email || "");

        // phone
        const rawPhone =
            (s.phoneNumbers?.[primaryPhoneLabel] as string) ||
            Object.values(s.phoneNumbers || {})[0] ||
            "";
        const p = splitPhone(rawPhone);
        setPhoneArea(p.area);
        setPhoneMid(p.mid);
        setPhoneLast(p.last);
        setPhoneExt(p.ext);
        setPhoneType(
            (primaryPhoneLabel || "primary").toLowerCase() === "primary"
                ? "Primary"
                : "Other"
        );
    }, [router, primaryPhoneLabel]);

    const handleLogout = () => {
        clearSession();
        router.replace("/");
    };

    const renderGeneral = () => (
        <div>
            {/* warning */}
            <div className="myouc-notice myouc-notice-warn">
                <span className="myouc-notice-ico">⚠️</span>
                <div className="myouc-notice-text">
                    Changes made to this page will not update your alert settings,&nbsp;
                    <a className="myouc-link" href="/myouc/alerts">
                        Click Here
                    </a>{" "}
                    to update.
                </div>
            </div>

            <p className="myouc-help">
                Use this form to update information for this account.
            </p>

            {/* IDENTITY */}
            <div className="myouc-section">
                <div className="myouc-section-title">IDENTITY</div>
                <div className="myouc-hr" />

                <div className="myouc-form-grid">
                    <div className="myouc-label">Full Name</div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="myouc-label">Username</div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled
                        />
                    </div>
                </div>
            </div>

            {/* MAILING & BILLING */}
            <div className="myouc-section">
                <div className="myouc-section-title">MAILING &amp; BILLING ADDRESS</div>
                <div className="myouc-hr" />

                <p className="myouc-muted-block">
                    All correspondence will be sent to this new address. Please note that
                    if you are enrolled in Paperless Billing you will not receive a bill
                    in the mail. If you need to change the name on an account, please use
                    the{" "}
                    <a className="myouc-link" href="/myouc/service-requests">
                        Move Service
                    </a>{" "}
                    form instead.
                </p>

                <div className="myouc-form-grid">
                    <div className="myouc-label">
                        Country <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <select
                            className="myouc-select"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option>UNITED STATES</option>
                            <option>CANADA</option>
                            <option>MEXICO</option>
                        </select>
                    </div>

                    <div className="myouc-label">
                        Street Address Line 1 <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={addr1}
                            onChange={(e) => setAddr1(e.target.value)}
                        />
                        <div className="myouc-hint">Include Apt or Unit Info Above</div>
                    </div>

                    <div className="myouc-label">Street Address Line 2</div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={addr2}
                            onChange={(e) => setAddr2(e.target.value)}
                        />
                    </div>

                    <div className="myouc-label">
                        City <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="myouc-label">
                        State/Province/Region <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <select
                            className="myouc-select"
                            value={stateRegion}
                            onChange={(e) => setStateRegion(e.target.value)}
                        >
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Alabama</option>
                            <option>New York</option>
                            <option>California</option>
                        </select>
                    </div>

                    <div className="myouc-label">
                        Zip Code / Postal Code <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input myouc-input-sm"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* EMAIL */}
            <div className="myouc-section">
                <div className="myouc-section-title">EMAIL ADDRESS</div>
                <div className="myouc-hr" />

                <p className="myouc-muted-block">
                    Remember: Changes to your email address will apply to all online
                    communications, including paperless statements.
                </p>

                <div className="myouc-form-grid">
                    <div className="myouc-label">
                        Email <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="myouc-label">
                        Confirm Email <span className="myouc-required">*</span>
                    </div>
                    <div className="myouc-value">
                        <input
                            className="myouc-input"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* PHONE */}
            <div className="myouc-section">
                <div className="myouc-section-title">PHONE NUMBER</div>
                <div className="myouc-hr" />

                <p className="myouc-muted-block">
                    To delete a phone number, select the remove button.
                </p>

                <div className="myouc-phone-row">
                    <div className="myouc-label-inline">
                        Primary Phone Number #1 <span className="myouc-required">*</span>
                    </div>

                    <div className="myouc-phone-inputs">
                        <input
                            className="myouc-input myouc-input-xs"
                            value={phoneArea}
                            onChange={(e) => setPhoneArea(e.target.value)}
                            placeholder="786"
                            maxLength={3}
                        />
                        <span className="myouc-phone-sep">)</span>
                        <input
                            className="myouc-input myouc-input-xs"
                            value={phoneMid}
                            onChange={(e) => setPhoneMid(e.target.value)}
                            placeholder="531"
                            maxLength={3}
                        />
                        <span className="myouc-phone-sep">-</span>
                        <input
                            className="myouc-input myouc-input-sm"
                            value={phoneLast}
                            onChange={(e) => setPhoneLast(e.target.value)}
                            placeholder="9343"
                            maxLength={4}
                        />
                        <span className="myouc-phone-ext">ext.</span>
                        <input
                            className="myouc-input myouc-input-sm"
                            value={phoneExt}
                            onChange={(e) => setPhoneExt(e.target.value)}
                            placeholder=""
                        />
                    </div>

                    <button
                        className="myouc-trash"
                        type="button"
                        aria-label="Remove phone"
                        title="Remove phone"
                    >
                        🗑️
                    </button>
                </div>

                <div className="myouc-radio-row">
                    {(["Primary", "Home", "Work", "Mobile", "Fax", "Other"] as PhoneType[]).map(
                        (t) => (
                            <label key={t} className="myouc-radio">
                                <input
                                    type="radio"
                                    name="phoneType"
                                    checked={phoneType === t}
                                    onChange={() => setPhoneType(t)}
                                />
                                <span>{t}</span>
                            </label>
                        )
                    )}
                </div>

                <div className="myouc-actions-row">
                    <button
                        type="button"
                        className="myouc-btn myouc-btn-blue myouc-btn-wide"
                        // no backend yet – keep disabled to avoid confusion
                        disabled
                        title="(Demo) Saving not wired yet"
                    >
                        UPDATE INFORMATION
                    </button>

                    <a className="myouc-link" href="/myouc/account-summary">
                        Cancel
                    </a>

                    <button
                        type="button"
                        className="myouc-link myouc-link-danger"
                        onClick={handleLogout}
                        style={{ marginLeft: "auto" }}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );

    const renderPassword = () => (
        <div>
            <div className="myouc-notice myouc-notice-info">
                <span className="myouc-notice-ico">ℹ️</span>
                <div className="myouc-notice-text">
                    Password update is not wired in this demo yet.
                </div>
            </div>

            <div className="myouc-section" style={{ marginTop: 18 }}>
                <div className="myouc-section-title">PASSWORD</div>
                <div className="myouc-hr" />

                <div className="myouc-form-grid">
                    <div className="myouc-label">Current Password</div>
                    <div className="myouc-value">
                        <input className="myouc-input" type="password" value="********" readOnly />
                    </div>

                    <div className="myouc-label">New Password</div>
                    <div className="myouc-value">
                        <input className="myouc-input" type="password" disabled />
                    </div>

                    <div className="myouc-label">Confirm New Password</div>
                    <div className="myouc-value">
                        <input className="myouc-input" type="password" disabled />
                    </div>
                </div>

                <div className="myouc-actions-row" style={{ marginTop: 18 }}>
                    <button
                        type="button"
                        className="myouc-btn myouc-btn-blue myouc-btn-wide"
                        disabled
                    >
                        UPDATE PASSWORD
                    </button>

                    <a className="myouc-link" href="/myouc/account-summary">
                        Cancel
                    </a>

                    <button
                        type="button"
                        className="myouc-link myouc-link-danger"
                        onClick={handleLogout}
                        style={{ marginLeft: "auto" }}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );

    if (!session) return null;

    return (
        <div className="myouc-container">
            <div className="myouc-grid">
                {/* SIDEBAR */}
                <aside className="myouc-sidebar">
                    <ul className="nav">
                        <li>
                            <a href="/myouc/account-summary">
                                <span className="myouc-ico">🏠</span>
                                Account Summary
                            </a>
                        </li>

                        <li className="active">
                            <a href="/myouc/my-info">
                                <span className="myouc-ico">👤</span>
                                My Info
                            </a>
                        </li>

                        <li className="expanded">
                            <a href="/myouc/billing">
                                <span className="myouc-ico">💳</span>
                                Billing &amp; Payment
                            </a>
                            <ul className="sub-nav">
                                <li>
                                    <a href="/myouc/billing/pay-by-echeck">Pay by eCheck</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/pay-by-card">Pay by Credit Card</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/pay-in-person">Pay in Person</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/report-problem">Report a Billing Problem</a>
                                </li>
                                <li>
                                    <a href="/myouc/billing/payment-history">Payment History</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="/myouc/service-requests">
                                <span className="myouc-ico">🧰</span>
                                Service Requests
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/outages">
                                <span className="myouc-ico">⚠️</span>
                                Outages &amp; Problems
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/rebates">
                                <span className="myouc-ico">🏷️</span>
                                Rebates &amp; Savings
                            </a>
                        </li>

                        <li>
                            <a href="/myouc/alerts">
                                <span className="myouc-ico">🔔</span>
                                Alerts
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* MAIN */}
                <section>
                    <div className="myouc-heading">
                        <h2>My Info</h2>
                    </div>

                    {/* Tabs */}
                    <div className="myouc-tabs">
                        <button
                            type="button"
                            className={`myouc-tab ${tab === "general" ? "active" : ""}`}
                            onClick={() => setTab("general")}
                        >
                            GENERAL INFORMATION
                        </button>
                        <button
                            type="button"
                            className={`myouc-tab ${tab === "password" ? "active" : ""}`}
                            onClick={() => setTab("password")}
                        >
                            PASSWORD
                        </button>
                    </div>

                    <div className="myouc-tab-panel">
                        {tab === "general" ? renderGeneral() : renderPassword()}
                    </div>
                </section>
            </div>
        </div>
    );
}