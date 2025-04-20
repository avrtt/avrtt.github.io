/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import React from 'react';
import { Link } from 'gatsby';
import Arrow from '../../images/freelance/services/arrow1.svg';
import * as styles from './styles.module.scss';

const GoBackButton = ({ link = '/', title = 'Back to the main page' }) => {
  return (
    <div className={styles.goBackWrapper}>
      <Link
        to={link}
        className={styles.goBack}
        title={title}
      >
        <img src={Arrow} alt="button_icon" width="50%" height="100%" />
      </Link>
    </div>
  );
};

export default GoBackButton;
