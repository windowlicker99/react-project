import React, { FC, useState, useEffect } from 'react';
import { CardDropdown } from '@components/common/СardDropdown';
import { ModalControl } from '@components/common/ModalControl';
import { IThreat } from '@interfaces/interfaces';
import { getSearch } from '@/utils/getSearch';

interface IRelatedThreatsProps {
  step: number;
}

export const RelatedThreats: FC<IRelatedThreatsProps> = ({ step }) => {
  const [threats, setThreats] = useState<IThreat[]>([]);

  const [searchText, setSearchText] = useState<string>('');

  const getSearched = async () => {
    const items = await getSearch('threats', searchText);
    setThreats(items);
  };

  useEffect(() => {
    getSearched();
  }, [step]);

  return (
    <div className="domains-aside-item">
      <ModalControl btnText="Add threat" searchText={searchText} onSearch={setSearchText} />
      <CardDropdown name="relatedThreats" content={threats} />
    </div>
  );
};
