import { useContext } from "react";
import { SliderContext, SliderContextProps } from "./SliderContext";

export const useSlider = () => useContext(SliderContext) as SliderContextProps;
