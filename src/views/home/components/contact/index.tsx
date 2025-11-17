import { zodResolver } from '@hookform/resolvers/zod';
import { motion as m, stagger } from 'motion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';

import spinner from '../../../../assets/loading.png';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { useRefSection } from '../../../../hooks/useRefSection';
import type { Msg } from '../../../../models/Msg';
import { sendMail } from '../../../../services/userService';
import styles from './styles.module.less';
import type { ContactSecProps } from './types';

const schema = z.object({
  name: z.string()
    .max(50)
    .nonempty({ message: 'error.required' }),
  mail: z.email({ message: 'error.mail' })
    .nonempty({ message: 'error.required' }),
  content: z.string()
    .max(500)
    .nonempty({ message: 'error.required' }),
});
type FormData = z.infer<typeof schema>;

const ContactSec: React.FC<ContactSecProps> = () => {
  const { t } = useTranslation();
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const ref = useRefSection('contact');
  const onSubmit = (data: FormData) => {
    const msg = data as Msg;
    setLoading(true);
    setResult('');
    sendMail(msg)
      .then(() => setResult('Mensaje enviado con éxito'))
      .catch(() => setResult('Hubo un error. Vuélvalo a intentar'))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.cont}>
      <m.div
        className={styles.contForm}
        initial={{ opacity: 0, translateX: '2rem' }}
        whileInView={{ opacity: 1, translateX: '0' }}
        viewport={{
          once: true,
          amount: 'some',
        }}
        transition={{
          delay: 0.2,
          duration: 1,
        }}
      >
        <div className={styles.desc}>
          <h2 ref={ref} className='h2HeadPac'>{ t('contact.title') }</h2>
          <p className={styles.desc}>{ t('contact.desc') }</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder={t('labels.phName')} max={50} hint={t(errors.name?.message as string)} {...register('name')}/>
          <Input placeholder={t('labels.phMail')} hint={t(errors.mail?.message as string)} {...register('mail')}/>
          <Input placeholder={t('labels.phMsg')} max={500} hint={t(errors.content?.message as string)} textarea {...register('content')}/>
          <div className={styles.actions}>
            <p className={styles.info}>{result}</p>
            {loading && <img src={spinner} className={styles.loading} />}
            <Button type='submit'>{t('labels.send')}</Button>
          </div>
        </form>
      </m.div>
    </div>
  );
};

export default ContactSec;
