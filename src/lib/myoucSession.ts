"use client";

export const MYOUC_SESSION_KEY = "myouc.session";

export type MyOucSession = {
    username: string;
    customerName: string;
    addressLines: string[];
    email: string;
    phoneNumbers: Record<string, string>;
};

export function saveSession(data: MyOucSession) {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(MYOUC_SESSION_KEY, JSON.stringify(data));
}

export function getSession(): MyOucSession | null {
    if (typeof window === "undefined") return null;
    const raw = sessionStorage.getItem(MYOUC_SESSION_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as MyOucSession;
    } catch {
        return null;
    }
}

export function clearSession() {
    if (typeof window === "undefined") return;
    sessionStorage.removeItem(MYOUC_SESSION_KEY);
}