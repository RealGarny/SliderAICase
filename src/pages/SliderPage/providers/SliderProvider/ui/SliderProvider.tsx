import { useRef, useState } from "react";
import {
    AddCanvasElements,
    SliderContext,
    SliderContextProps,
    SliderElementPayload,
} from "../lib/SliderContext";
import { getRandomArbitrary } from "shared/lib/Math/getRandomArbitrary";

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
    const [canvasElements, setCanvasElements] = useState<SliderElementPayload[]>([]);
    const [selectedElements, setSelectedElements] = useState<number[]>([]);
    const canvasRef = useRef<HTMLDivElement | null>(null);

    const deleteSelected = () => {
        setCanvasElements(prev => {
            return prev.filter(el => {
                console.log(el.id, selectedElements.includes(el.id), selectedElements);
                return !selectedElements.includes(el.id);
            });
        });
        setSelectedElements([]);
    };

    const addCanvasElements: AddCanvasElements = elements => {
        if (!canvasRef.current) return;
        setCanvasElements(prev => {
            let idCount = prev.length;
            const newElements = elements.map(element => {
                const newElement: SliderElementPayload = {
                    type: element.type!,
                    id: idCount,
                    position: {
                        x: Math.floor(getRandomArbitrary(0, canvasRef.current!.clientWidth)),
                        y: Math.floor(getRandomArbitrary(0, canvasRef.current!.clientHeight)),
                    },
                    height: Math.floor(
                        getRandomArbitrary(
                            canvasRef.current!.clientWidth * 0.05,
                            canvasRef.current!.clientWidth * 0.2,
                        ),
                    ),
                };
                idCount++;
                return newElement;
            });
            /*
            setSelectedElements(newElements.map(el => el.id));
            */
            return [...prev, ...newElements];
        });
    };

    const values: SliderContextProps = {
        selectedElements,
        canvasElements,
        setCanvasElements,
        setSelectedElements,
        deleteSelected,
        canvasRef,
        addCanvasElements,
    };
    return <SliderContext.Provider value={values}>{children}</SliderContext.Provider>;
};
