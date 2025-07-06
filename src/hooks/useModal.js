import { useState } from "react";

export const useModal = (initialValue = false, initialTitle = '',) => {
    const [value, setValue] = useState(initialValue);
    const [title, setTitle] = useState(initialTitle);

    return {
        isOpen: value,
        setIsOpen: setValue,
        setTitle,
        title,
        onClose: () => {
            setValue(false);
        }
    };
};
