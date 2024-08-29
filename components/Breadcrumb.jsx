"use client";

import _ from "lodash";
import Link from "next/link";

export default function Breadcrumb({ pathname }) {
    const pathnames = pathname.split("/").filter((x) => !/^[1-9]/.test(x) && /^[a-z]/.test(x));

    return (
        <nav aria-label="breadcrumb" className="hidden lg:block">
            <ol className="flex flex-wrap items-center text-sm md:text-base">
                {/* <li
                    className={`user-none cursor-default whitespace-nowrap pl-2 text-base-400 after:content-['/'] first:pl-0 last:after:content-none`}
                >
                    <Link
                        href={"/dashboard"}
                        className="inline-block cursor-pointer whitespace-nowrap pr-2 hover:text-base-500"
                    >
                        <IconHomeFilled size={18} className="" />
                    </Link>
                </li> */}
                {pathnames.map((part, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li
                            className={`user-none cursor-default whitespace-nowrap pl-2 text-base-400 after:content-['/'] first:pl-0 last:after:content-none`}
                            key={part}
                        >
                            {isLast ? (
                                <span className="pr-2 text-primary">{_.startCase(part)}</span>
                            ) : (
                                <Link
                                    href={routeTo}
                                    className="inline-block cursor-pointer whitespace-nowrap pr-2 hover:text-base-500"
                                >
                                    {_.startCase(part)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
