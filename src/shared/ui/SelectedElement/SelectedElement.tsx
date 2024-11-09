import classNames from "shared/lib/ClassNames/classNames";
import * as cls from "./SelectedElement.module.scss";

export const SelectedElement = ({
    isSelected,
    children,
    onSelect,
}: {
    isSelected: boolean;
    children: React.ReactNode;
    onSelect: () => void;
}) => {
    return (
        <div
            onMouseDown={onSelect}
            className={classNames(cls["element"], {}, [
                isSelected ? cls["selected"] : cls["unselected"],
            ])}
        >
            {children}
        </div>
    );
};
