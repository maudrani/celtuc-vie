import { AppDataContext } from '@/contexts/appdata';
import React, { Fragment, useContext } from 'react';
import { GetDataList } from './adapters';

const MailList = ({ component }) => {
  const { brand } = useContext(AppDataContext);
  const list = GetDataList({ brand });

  if (!list) return;

  const Wrapper = component || Fragment;

  return list.map(mail => (
    <Wrapper key={mail.id}>
      <a target='_blank' href={`mailto:${mail.mail}`}>{mail.mail}</a>
    </Wrapper>
  ));
};

export default MailList;
