import { SliderPage } from "pages/SliderPage";
import "../styles/index.scss";
import { SliderProvider } from "pages/SliderPage/providers/SliderProvider/ui/SliderProvider";

export const App = () => {
    return (
        <div className="app default">
            <SliderProvider>
                <SliderPage />
            </SliderProvider>
        </div>
    );
};
