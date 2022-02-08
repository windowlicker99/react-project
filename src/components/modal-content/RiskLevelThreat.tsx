import React, { FC, useState, useEffect } from 'react';

import { IThreat } from '@/interfaces/interfaces';
import { getSearch } from '@/utils/getSearch';
import { RiskLevelThreatCard } from './RiskLevelThreatCard';

export const RiskLevelThreatContent: FC = () => {
  const [threats, setThreats] = useState<IThreat[]>([]);

  const getSearched = async () => {
    const items = await getSearch('threats', '');
    setThreats(items);
  };

  useEffect(() => {
    getSearched();
  }, []);

  const filterCheckedThreats = threats.filter((threat) => threat.checked);

  return (
    <div className="risk-level-threat">
      {filterCheckedThreats.map((threat) => (
        <RiskLevelThreatCard threat={threat} key={threat.id} />
      ))}
    </div>
  );
};
