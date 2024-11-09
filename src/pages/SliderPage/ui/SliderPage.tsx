import * as cls from "./SliderPage.module.scss";
import { SliderCanvas } from "./SliderCanvas";
import { SliderNavigation } from "./SliderNavigation/ui/SliderNavigation";

export const SliderPage = () => {
    return (
        <div className={cls["page"]}>
            <SliderNavigation />
            <SliderCanvas />
        </div>
    );
};
