import Image from "next/image";

export default function HeroSearch() {
    return (
        <>
            <div
                className={"flex flex-col items-center justify-center bg-[#dadbf1] h-[25rem]"}>
                <h1 className={"text-[2rem] font-semibold sm:text-[3rem] md:text-[5rem] tracking-tighter"}>
                    How can we help?
                </h1>
                <div className={"pb-16 pt-5 text-xl relative"}>
                    <input
                        className={"border-2 border-black rounded-md md:w-[80dvw] w-[96dvw] max-w-[45rem] m-auto h-16 px-5 focus:border-blue-300 focus:outline-none"}
                        placeholder={"Search"}
                    />
                    <div className={"absolute right-3 top-[35%] transform -translate-y-1/2"}>
                        <Image src={"/icons/arrow-sm-right-svgrepo-com.svg"} alt={"arrow icon"} width={30}
                               height={30}/>
                    </div>
                </div>
            </div>
        </>
    )
}