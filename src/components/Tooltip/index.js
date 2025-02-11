import React from "react"
import info from "../../images/goals/info.svg"
import * as styles from "./styles.module.scss"

const Tooltip = ({ text }) => {
    return (
        <span className={styles.tooltipGeneral}>
            <img id={styles.infoGeneral} src={info} alt='info'/>
            <span className={styles.tooltiptextGeneral}>
                {text}
            </span>
        </span>
    );
};
export default Tooltip;
