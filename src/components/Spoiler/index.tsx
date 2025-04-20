/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect, useRef, MutableRefObject } from "react";
import M from "../Markdown";
import * as stylesSpoilers from "../../styles/spoilers.module.scss"

// legacy code
// refactor this component

interface SpoilerProps {
  title: string;
  block1?: string;
  block2?: string;
  block3?: string;
  block4?: string;
  block5?: string;
  block6?: string;
  block7?: string;
  block8?: string;
  block9?: string;
  block10?: string;
  block11?: string;
  block12?: string;
  block13?: string;
  block14?: string;
  block15?: string;
  block16?: string;
  block17?: string;
  block18?: string;
  block19?: string;
  block20?: string;
  block21?: string;
  block22?: string;
  block23?: string;
  block24?: string;
  block25?: string;
  block26?: string;
  block27?: string;
  block28?: string;
  block29?: string;
  block30?: string;
  block31?: string;
  block32?: string;
  block33?: string;
  block34?: string;
  block35?: string;
  block36?: string;
  block37?: string;
  block38?: string;
  block39?: string;
  block40?: string;
  block41?: string;
  block42?: string;
  block43?: string;
  block44?: string;
  block45?: string;
  block46?: string;
  block47?: string;
  block48?: string;
  block49?: string;
  block50?: string;
  spoilerExtraDesc?: string;
}

const Spoiler: React.FC<SpoilerProps> = ({ 
    title, 
    block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
    block11, block12, block13, block14, block15, block16, block17, block18, block19, block20,
    block21, block22, block23, block24, block25, block26, block27, block28, block29, block30,
    block31, block32, block33, block34, block35, block36, block37, block38, block39, block40,
    block41, block42, block43, block44, block45, block46, block47, block48, block49, block50,
    spoilerExtraDesc
  }) => {

  const collRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const coll = collRef.current;
    coll.forEach((element) => {
      if (element) {
        element.addEventListener("click", toggleContent);
      }
    })

    return () => {
      coll.forEach((element) => {
        if (element) {
          element.removeEventListener("click", toggleContent)
        }
      })
    }
  }, [])

  const toggleContent = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    const content = target.nextElementSibling as HTMLElement;
    target.classList.toggle(stylesSpoilers.activeSpoiler);
    if (content.style.maxHeight) {
      content.style.maxHeight = '';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  const buttonRef = (el: HTMLButtonElement | null) => {
    if (el) {
      collRef.current.push(el);
    }
  };

  return (
    <div>
      <button className={stylesSpoilers.spoilerButton} ref={buttonRef}>
        &nbsp;&nbsp;
        <span className={stylesSpoilers.spoilerText}></span>
        {title}
        &nbsp;&nbsp;
      </button>
      <div className={stylesSpoilers.spoilerContentWrapper}>
        <div className={stylesSpoilers.spoilerContent}>
          <br/>
          <span className="mobileOnlySupport"><br/></span>
          {block1 && <M text={block1}/>}
          {block2 && <M text={block2}/>}
          {block3 && <M text={block3}/>}
          {block4 && <M text={block4}/>}
          {block5 && <M text={block5}/>}
          {block6 && <M text={block6}/>}
          {block7 && <M text={block7}/>}
          {block8 && <M text={block8}/>}
          {block9 && <M text={block9}/>}
          {block10 && <M text={block10}/>}
          {block11 && <M text={block11}/>}
          {block12 && <M text={block12}/>}
          {block13 && <M text={block13}/>}
          {block14 && <M text={block14}/>}
          {block15 && <M text={block15}/>}
          {block16 && <M text={block16}/>}
          {block17 && <M text={block17}/>}
          {block18 && <M text={block18}/>}
          {block19 && <M text={block19}/>}
          {block20 && <M text={block20}/>}
          {block21 && <M text={block21}/>}
          {block22 && <M text={block22}/>}
          {block23 && <M text={block23}/>}
          {block24 && <M text={block24}/>}
          {block25 && <M text={block25}/>}
          {block26 && <M text={block26}/>}
          {block27 && <M text={block27}/>}
          {block28 && <M text={block28}/>}
          {block29 && <M text={block29}/>}
          {block30 && <M text={block30}/>}
          {block31 && <M text={block31}/>}
          {block32 && <M text={block32}/>}
          {block33 && <M text={block33}/>}
          {block34 && <M text={block34}/>}
          {block35 && <M text={block35}/>}
          {block36 && <M text={block36}/>}
          {block37 && <M text={block37}/>}
          {block38 && <M text={block38}/>}
          {block39 && <M text={block39}/>}
          {block40 && <M text={block40}/>}
          {block41 && <M text={block41}/>}
          {block42 && <M text={block42}/>}
          {block43 && <M text={block43}/>}
          {block44 && <M text={block44}/>}
          {block45 && <M text={block45}/>}
          {block46 && <M text={block46}/>}
          {block47 && <M text={block47}/>}
          {block48 && <M text={block48}/>}
          {block49 && <M text={block49}/>}
          {block50 && <M text={block50}/>}
        </div>
      </div>
    </div>
  )
};
export default Spoiler;
