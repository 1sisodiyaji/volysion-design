"use client"
import { NoiseBackground } from "../ui/noise-background";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const BottomSearchBar = () => {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <NoiseBackground
                    containerClassName="max-w-xl p-2 rounded-full mx-auto"
                    gradientColors={[
                        "rgb(255, 100, 150)",
                        "rgb(100, 150, 255)",
                        "rgb(255, 200, 100)",
                    ]}
                >
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </NoiseBackground>
            </div>
        </div>
    )
}
export default BottomSearchBar