"use client"

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
    const router = useRouter();
    const pathName = usePathname()
    return (
        <section className="bottombar">
            <div className="bottombar_container">
            {
                    sidebarLinks.map((item, index) => {
                        const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;
                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                            >
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    height={24}
                                    width={24}
                                />
                                <p className="text-subtle-medium text-light-1 max-sm:hidden">{item.label.split(/\s+/)[0]}</p>
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Bottombar;