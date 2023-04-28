import { AppDataContext } from '@/contexts/appdata';
import React, { Fragment, useContext } from 'react';
import { GetDataList } from './adapters';

const AddressList = ({ component }) => {
  const { brand } = useContext(AppDataContext);
  const list = GetDataList({ brand });

  if (!list) return;

  const Wrapper = component || Fragment;

  return list.map(address => (
    <Wrapper key={address.id}>
      <a target='_blank' href={`http://maps.google.com/?q=${address.address}`}>{address.address}</a>
    </Wrapper>
  ));
};

export default AddressList;
