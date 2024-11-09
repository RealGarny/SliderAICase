import { Draggable } from "shared/ui/Draggable/Draggable";
import * as cls from "./SliderCanvas.module.scss";

export const SliderCanvas = () => {
    return (
        <div className={cls["body"]}>
            <Draggable>
                <div style={{ pointerEvents: "none" }}>hello</div>
            </Draggable>
        </div>
    );
};
