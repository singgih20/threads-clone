"use client"

import Link from "next/link";
import { sidebarLinks } from '@/constants';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton, SignIn } from "@clerk/nextjs";

function Leftsidebar() {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {
                    sidebarLinks.map((item, index) => {
                        const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;
                        return (
                            <Link 
                                href={item.route}
                                key={item.label}
                                className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                            >
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    height={24}
                                    width={24}
                                />
                                <p className="text-light-1 max-lg:hidden">{item.label}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image
                                src="/assets/logout.svg" 
                                alt="logout" 
                                width={24} 
                                height={24} 
                            />
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}

export default Leftsidebar;