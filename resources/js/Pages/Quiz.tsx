import { ChoiceButton } from "@/Components/atoms";
import BaseLayout from "@/Layouts/BaseLayout";

const Quiz = () => {
    return (
        <BaseLayout>
            <form className="">
                <p className="text-green-600 font-bold text-center">
                    Soal 3 dari 10
                </p>
                <div className="bb mt-5">content of question</div>
                <div className="mt-10 space-y-5 flex flex-col">
                    <ChoiceButton>A</ChoiceButton>
                    <ChoiceButton>B</ChoiceButton>
                    <ChoiceButton>C</ChoiceButton>
                    <ChoiceButton>D</ChoiceButton>
                </div>
                <div className="bb mt-10">completion content</div>
                <div className="mt-5 flex justify-end">
                    <button className="text-sm">Submit</button>
                </div>
            </form>
        </BaseLayout>
    );
};

export default Quiz;
