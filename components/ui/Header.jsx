import React from "react";
import Logo from "./Logo";
import Link from "next/link";


const Header = () => {
    return (
        <div className=" fixed top-6 left-1/2 transform -translate-x-1/2 w-auto h-16 text-nowrap">
            <div className=" backdrop-blur-md bg-violet-200/10 border-2 border-voilet-100 rounded-md px-8 py-3 flex items-center justify-between gap-8">
                <Link href="/" className=" mr-10 md:mr-20">
                    <Logo/>
                </Link>
            </div>
        </div>
    );
};

export default Header;
