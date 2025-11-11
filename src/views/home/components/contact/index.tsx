import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { ContactSecProps } from './types';

const ContactSec: React.FC<ContactSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('contact');
  const handleSubmit = () => console.log('Submit btn');
  return (
    <div className={styles.cont}>
      <div className={styles.contForm}>
        <div className={styles.desc}>
          <h2 ref={ref} className='h2HeadPac'>{ t('contact.title') }</h2>
          <p className={styles.desc}>{ t('contact.desc') }</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input placeholder={t('labels.phName')} />
          <Input placeholder={t('labels.phMail')} />
          <Input placeholder={t('labels.phMsg')} />
          <div className={styles.actions}>
            <Button type='submit'>{t('labels.send')}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSec;
