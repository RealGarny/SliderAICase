import { MouseEvent, useRef, useState } from "react";
import { twoDPoint } from "shared/types/geometry";

export interface DraggableProps {
    children: React.ReactNode;
    position?: twoDPoint;
}
export const Draggable: React.FC<DraggableProps> = ({ children, position }) => {
    const [compPosition, setCompPosition] = useState<twoDPoint>(position || { x: 0, y: 0 });
    const dragRef = useRef<{ startX: number; startY: number } | null>(null);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        dragRef.current = {
            startX: event.clientX - compPosition.x,
            startY: event.clientY - compPosition.y,
        };
        //@ts-expect-error test
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (dragRef.current) {
            const newX = event.clientX - dragRef.current.startX;
            const newY = event.clientY - dragRef.current.startY;
            console.log({ newX, newY });
            setCompPosition({
                x: newX,
                y: newY,
            });
        }
    };

    const handleMouseUp = () => {
        //@ts-expect-error test
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        dragRef.current = null;
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            style={{
                position: "absolute",
                left: compPosition.x,
                top: compPosition.y,
            }}
        >
            {children}
        </div>
    );
};
