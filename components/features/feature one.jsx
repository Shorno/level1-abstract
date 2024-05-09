import Image from "next/image";
import Link from "next/link";

export default function FeatureOne(){
    return (
        <>
            <div className={"flex gap-12"}>
                <div className={"relative"}>
                    <Image src={"/puzzle.png"} alt={"feature one"} width={100} cover height={100} quality={100}/>
                </div>
                <div>
                    <h1 className={"text-2xl font-semibold leading-10 pb-3"}>Using Abstract</h1>
                    <p className={"text-2xl"}>
                        Abstract lets you manage, version, and document your designs in one place.
                    </p>

                    <div className={"py-8"}>
                        <Link className={"text-blue-500 text-2xl"}
                              href={"#"}>Learn more--&gt;</Link>
                    </div>
                </div>
            </div>
        </>
    )
}