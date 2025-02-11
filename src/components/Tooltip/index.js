import React, { useState, useEffect, useRef } from "react";
import info from "../../images/goals/info.svg"
import * as styles from "./styles.module.scss"

const Tooltip = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    const handleIconClick = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <span className={styles.tooltipGeneral} ref={tooltipRef}>
            <img id={styles.infoGeneral} src={info} alt='info' onClick={handleIconClick}/>
            <span className={isOpen ? `${styles.tooltiptextGeneral} ${styles.visible}` : styles.tooltiptextGeneral}>
                {text}
            </span>
        </span>
    );
};

export default Tooltip;
