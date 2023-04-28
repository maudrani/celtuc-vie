import { AppDataContext } from '@/contexts/appdata';
import React, { Fragment, useContext } from 'react';
import { GetDataList } from './adapters';

const PhonesList = ({ component }) => {
  const { brand } = useContext(AppDataContext);
  const list = GetDataList({ brand });

  if (!list) return;

  const Wrapper = component || Fragment;

  return list.map(num => (
    <Wrapper key={num.id}>
      <a href={`tel:${num.phone_number}`}>{num.phone_number}</a>
    </Wrapper>
  ));
};

export default PhonesList;
