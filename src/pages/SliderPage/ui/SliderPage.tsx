import * as cls from "./SliderPage.module.scss";
import { SliderCanvas } from "./SliderCanvas";
import { SliderNavigation } from "./SliderNavigation/ui/SliderNavigation";
import { useSlider } from "../providers/SliderProvider/lib/useSlider";

export const SliderPage = () => {
    const { deleteSelected, setCanvasElements, setSelectedElements, canvasRef, addCanvasElements } =
        useSlider();

    const handleInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Backspace") {
            deleteSelected();
        }
    };

    return (
        <div tabIndex={0} className={cls["page"]} onKeyUp={handleInput}>
            <SliderNavigation />
            <SliderCanvas ref={canvasRef} />
        </div>
    );
};
