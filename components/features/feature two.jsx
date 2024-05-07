import Image from "next/image";
import Link from "next/link";

export default function FeatureTwo() {
    return (
        <>
            <div className={"flex gap-10 ml-14"}>
                <div>
                    <Image src={"/profile.png"} alt={"feature one"} width={200} cover height={200} quality={100}/>
                </div>
                <div>
                    <h1 className={"text-2xl font-semibold leading-10 pb-3"}>Manage your account</h1>
                    <p className={"text-2xl"}>
                        Configure your account settings, such as your email, profile details, and password.
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