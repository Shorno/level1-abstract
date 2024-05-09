import FeatureOne from "@/components/features/feature one";
import FeatureTwo from "@/components/features/feature two";
import FeatureThree from "@/components/features/feature three";
import FeatureFour from "@/components/features/feature four";
import FeatureFive from "@/components/features/feature five";
import FeatureSix from "@/components/features/feature six";

export default function Features() {
    return (
        <>
            <div className={"sm:w-[80dvw] w-[90dvw] m-auto"}>
                <div className={"py-24 mt-12"}>
                    <div className={"grid grid-cols-1 gap-10 md:grid-cols-2"}>
                        <FeatureOne/>
                        <FeatureTwo/>
                        <FeatureThree/>
                        <FeatureFour/>
                        <FeatureFive/>
                        <FeatureSix/>
                    </div>
                </div>
            </div>
        </>
    )
}