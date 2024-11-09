import { SliderElementPayload } from "pages/SliderPage/providers/SliderProvider/lib/SliderContext";
import { useSlider } from "pages/SliderPage/providers/SliderProvider/lib/useSlider";
import { Draggable } from "shared/ui/Draggable/Draggable";
import { SelectedElement } from "shared/ui/SelectedElement/SelectedElement";

export interface CanvasElementProps {
    element: SliderElementPayload;
    children?: React.ReactNode;
}

export const CanvasElement: React.FC<CanvasElementProps> = ({ element, children }) => {
    const { selectedElements, setSelectedElements } = useSlider();
    const isSelected = selectedElements.includes(element.id);
    const onSelect = () => {
        if (!isSelected) {
            setSelectedElements(prev => [...prev, element.id]);
        }
    };
    return (
        <Draggable position={element.position}>
            <SelectedElement onSelect={onSelect} isSelected={isSelected}>
                {children}
            </SelectedElement>
        </Draggable>
    );
};
