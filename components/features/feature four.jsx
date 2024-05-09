import Image from "next/image";
import Link from "next/link";

export default function FeatureFour(){
    return (
        <>
            <div className={"flex gap-12"}>
                <div className={"relative"}>
                    <Image src={"/dollar.png"} alt={"feature one"} width={100} height={100} quality={100}/>
                </div>
                <div>
                    <h1 className={"text-2xl font-semibold leading-10 pb-3"}>
                        Manage billing</h1>
                    <p className={"text-2xl"}>
                        Change subscriptions and payment details.
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