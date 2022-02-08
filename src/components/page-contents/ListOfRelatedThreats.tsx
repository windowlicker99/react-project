import React, { FC, useEffect, useState } from 'react';
import { IThreat } from '@/interfaces/interfaces';
import { getThreats } from '@/utils/getThreats';

export const ListOfRelatedThreats: FC = () => {
  const [threats, setThreats] = useState<IThreat[]>([]);

  const getRelatedThreats = async () => {
    const items = await getThreats();
    setThreats(items);
  };

  const listOfRelated = threats.filter((threat: IThreat) => threat.checked);

  useEffect(() => {
    getRelatedThreats();
  }, []);

  return (
    <div className="threats-content">
      <ul className="threats-content-list">
        {listOfRelated.map((threat) => (
          <li className="threats-content-item" key={threat.name}>
            {threat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
