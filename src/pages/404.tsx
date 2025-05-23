/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React, { useEffect } from "react";
import NotFound from '../components/NotFound'
import SEO from '../components/seo'

const NotFoundRedirect = () => {
  return (
    <main>
      <NotFound/>
    </main>
  )
}

export default NotFoundRedirect

export const Head = () => (
  <SEO 
    title="404 - avrtt.blog"
    flagHidden={true}
  />
)
