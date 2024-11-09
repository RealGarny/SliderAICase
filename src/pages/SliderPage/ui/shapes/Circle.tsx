import { CanvasElement, CanvasElementProps } from "./CanvasElement";

export interface CircleProps extends CanvasElementProps {}

const defaultHeight = 20;

export const Circle: React.FC<CircleProps> = ({ element }) => {
    return (
        <CanvasElement element={element}>
            <div
                style={{
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "9999px",
                    height: element.height || defaultHeight,
                    width: element.height || defaultHeight,
                }}
            ></div>
        </CanvasElement>
    );
};
