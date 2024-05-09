export default function Footer() {
    return (
        <>
            <div className={"bg-black w-full overflow-hidden"}>
                <div className={"bg-black pt-10 text-white grid grid-cols-2 pl-3 gap-5 lg:flex lg:pl-20"}>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Abstract</h1>
                        <p>Start Trial</p>
                        <p>Pricing</p>
                        <p>Download</p>
                    </div>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Resource</h1>
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Release Note</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Community</h1>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Dribble</p>
                        <p>Podcast</p>
                    </div>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Company</h1>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h1 className={"text-2xl font-bold"}>Contact Us</h1>
                        <p>info@shorno.com</p>
                    </div>
                </div>
                <div className={"text-white text-lg font-semibold pl-3 py-8 lg:relative lg:left-[70%] xl:left-[80%]"}>
                    <p>@Copyright 2024</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </>
    )
}