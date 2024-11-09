import { Button } from "shared/ui/Button/Button";
import { SliderElementTypes } from "../providers/SliderProvider/lib/SliderContext";
import { memo } from "react";
import { useSlider } from "../providers/SliderProvider/lib/useSlider";

export const CreateCircleButton = memo(function CreateCircleButton() {
    const { addCanvasElements } = useSlider();
    const createCircle = () => {
        addCanvasElements([{ type: SliderElementTypes.CIRCLE }]);
    };

    return <Button onClick={createCircle}>Добавить круг</Button>;
});
