import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className={"bg-blue-400 md:px-16 shadow-md"}>
                <div className={"h-[5.5rem] items-center flex pl-5 justify-between m-auto"}>
                    <nav>
                        <div className={"flex items-center gap-2 text-xl font-bold text-white"}>
                            <Image src={"/abstract.png"} alt={"site logo"} width={40} height={40}/>
                            <Link href={"#"}>Abstract</Link>
                            <div className={"w-0.5 rounded-sm h-8 bg-white flex items-center justify-center"}></div>
                            <div>
                                <Link href={"#"}>Help Center</Link>
                            </div>
                        </div>
                    </nav>

                    <nav className={"hidden lg:flex gap-3 pr-3"}>
                        <button className={"text-white font-bold text-xl px-5 py-3 rounded-lg border-2"}>
                            Submit a request
                        </button>
                        <button className={"bg-black text-white font-bold text-xl px-7 py-3 rounded-lg"}>
                            Sign in
                        </button>
                    </nav>

                    <nav className={"lg:hidden"}>
                        <div className={"flex items-center gap-3 pr-3"}>
                            <div>
                                <Image src={"/icons/search-svgrepo-com.svg"} alt={"search icon"} width={30}
                                       height={25}/>
                            </div>
                            <div>
                                <Image src={"/icons/hamburger-menu-svgrepo-com.svg"} alt={"hamburger menu"} width={25}
                                       height={25}/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}




