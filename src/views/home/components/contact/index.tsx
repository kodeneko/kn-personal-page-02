import React from 'react';

import styles from './styles.module.less';
import type { ContactSecProps } from './types';

const ContactSec: React.FC<ContactSecProps> = () => {
  return (
    <div className={styles.cont}>
      Contact
    </div>
  );
};

export default ContactSec;
