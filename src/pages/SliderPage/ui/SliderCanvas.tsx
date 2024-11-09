import {
    SliderElementPayload,
    SliderElementTypes,
} from "../providers/SliderProvider/lib/SliderContext";
import { useSlider } from "../providers/SliderProvider/lib/useSlider";
import * as cls from "./SliderCanvas.module.scss";
import { Circle } from "./shapes/Circle";
import { forwardRef } from "react";

export const SliderCanvas = forwardRef<HTMLDivElement>(function SliderCanvas({}, ref) {
    const { canvasElements } = useSlider();
    const renderELements = (elements: SliderElementPayload[]): React.ReactNode[] => {
        const result: React.ReactNode[] = [];
        for (const element of elements) {
            switch (element.type) {
                case SliderElementTypes.CIRCLE:
                    result.push(renderCircle(element));
            }
        }
        return result;
    };

    const renderCircle = (element: SliderElementPayload) => {
        return <Circle key={element.id} element={element} />;
    };

    return (
        <div className={cls["body"]} ref={ref}>
            {renderELements(canvasElements)}
        </div>
    );
});
