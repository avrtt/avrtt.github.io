/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useState, useEffect, useRef } from "react";
import info from "../../images/goals/info.svg"
import * as styles from "./styles.module.scss"

interface TooltipProps {
  text: React.ReactNode;
  isBadge?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, isBadge=false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef<HTMLSpanElement | null>(null);

    const handleIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (tooltipRef.current && event.target instanceof Node && !tooltipRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <span className={styles.tooltipWrapper} ref={tooltipRef}>
            <img id={isBadge ? styles.infoBadge : styles.info} src={info} alt='info' onClick={handleIconClick}/>
            <span className={isOpen ? `${styles.tooltiptext} ${styles.visible}` : styles.tooltiptext}>
                {text}
            </span>
        </span>
    );
};

export default Tooltip;
