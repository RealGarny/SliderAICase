import { createContext } from "react";
import { TwoDPoint } from "shared/types/geometry";

export enum SliderElementTypes {
    CIRCLE = "circle",
}

export type SliderElementPayload = {
    id: number;
    type: SliderElementTypes;
    position: TwoDPoint;
    height?: number;
};

export type AddCanvasElements = (elements: Partial<SliderElementPayload>[]) => void;

export interface SliderContextProps {
    canvasElements: SliderElementPayload[];
    setCanvasElements: React.Dispatch<React.SetStateAction<SliderElementPayload[]>>;
    selectedElements: number[];
    setSelectedElements: React.Dispatch<React.SetStateAction<number[]>>;
    deleteSelected: () => void;
    addCanvasElements: AddCanvasElements;
    canvasRef: React.RefObject<HTMLDivElement>;
}

export const SliderContext = createContext<SliderContextProps | null>(null);
