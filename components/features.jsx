import FeatureOne from "@/components/features/feature one";
import FeatureTwo from "@/components/features/feature two";

export default function Features() {
    return (
        <>
            <div className={"py-24"}>
                <div className={"grid grid-cols-1 gap-5 md:grid-cols-2"}>
                    <FeatureOne/>
                    <FeatureTwo/>
                </div>
            </div>
        </>
    )
}