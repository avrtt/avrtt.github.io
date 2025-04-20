/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from "react";
import * as stylesTableOfContents from "../../styles/table_of_contents.module.scss";

interface Heading {
  text: string;
  id: string;
  level: string;
}

interface TOCItem extends Heading {
  items: Heading[];
}

function buildTOCHierarchy(headings: Heading[]): TOCItem[] {
  const toc: TOCItem[] = [];
  let currentH2: TOCItem | null = null;

  headings.forEach((heading: Heading) => {
    if (heading.level === "H2") {
      currentH2 = { ...heading, items: [] };
      toc.push(currentH2);
    } else if (heading.level === "H3") {
      if (!currentH2) {
        currentH2 = { text: "", id: "", level: "H2", items: [] };
        toc.push(currentH2);
      }
      currentH2.items.push({ ...heading });
    }
  });

  return toc;
}

interface CustomTableOfContentsProps {
  headings: Heading[];
}

export const CustomTableOfContents: React.FC<CustomTableOfContentsProps> = ({ headings }) => {
  if (!headings || headings.length === 0) return null;

  const tocData = buildTOCHierarchy(headings);

  const handleClick = (e: React.MouseEvent, id: string): void => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={stylesTableOfContents.toc}>
      <ul>
        {tocData.map((h2Item, i) => (
          <li key={i}>
            <a href={`#${h2Item.id}`} onClick={(e) => handleClick(e, h2Item.id)}>
              {h2Item.text}
            </a>
            {h2Item.items && h2Item.items.length > 0 && (
              <ul>
                {h2Item.items.map((h3Item, j) => (
                  <li key={j}>
                    <a
                      href={`#${h3Item.id}`}
                      onClick={(e) => handleClick(e, h3Item.id)}
                    >
                      {h3Item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};