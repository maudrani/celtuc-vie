import { AppDataContext } from '@/contexts/appdata';
import React, { Fragment, useContext } from 'react';
import { GetDataList } from './adapters';

const SocialMediaList = ({ component, icon = {show: true, size: '2x'}, }) => {
  const { brand } = useContext(AppDataContext);
  const list = GetDataList({ brand });

  if (!list) return;

  const Wrapper = component || Fragment;

  return list.map(media => (
    <Wrapper key={media.id}>
      <a target="_blank" href={`${media.link.url}`}>
        {icon.show && !!media.icon ? (
          <span className={`fab fa-${icon.size} fa-${media.icon}`} />
        ) : (
          media.name
        )}
      </a>
    </Wrapper>
  ));
};

export default SocialMediaList;
