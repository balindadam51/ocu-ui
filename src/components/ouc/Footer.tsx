import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container-max py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://www.ouc.com/wp-content/uploads/2024/08/OUC-Logo.webp"
                            alt="OUC Logo"
                            width={170}
                            height={44}
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <a className="hover:text-gray-900" href="/newsroom">Newsroom</a>
                        <span className="text-gray-300">|</span>
                        <a className="hover:text-gray-900" href="/about/government-relations-financials">Government
                            Relations & Financials</a>
                        <span className="text-gray-300">|</span>
                        <a className="hover:text-gray-900" href="/about/doing-business-with-ouc">Doing Business with
                            OUC</a>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <a className="hover:text-gray-900" href="https://www.facebook.com">Facebook</a>
                        <a className="hover:text-gray-900" href="https://x.com">X</a>
                        <a className="hover:text-gray-900" href="https://www.instagram.com">Instagram</a>
                        <a className="hover:text-gray-900" href="https://www.youtube.com">YouTube</a>
                        <a className="hover:text-gray-900" href="https://www.linkedin.com">LinkedIn</a>
                    </div>
                </div>

                <div className="mt-8 text-xs text-gray-500">
                    Copyright © {new Date().getFullYear()} Orlando Utilities Commission. All rights reserved.
                </div>
            </div>
        </footer>
    );
}