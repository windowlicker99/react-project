import React, { FC, useState, useEffect } from 'react';
import { CardDropdown } from '@components/common/СardDropdown';
import { ModalControl } from '@components/common/ModalControl';
import { IControl, IThreat } from '@interfaces/interfaces';
import { getThreats } from '@/utils/getThreats';
import { getControls } from '@/utils/getControls';

interface IRelatedControlsProps {
  step: number;
  setRelatedListStep: () => void;
}

export const RelatedControls: FC<IRelatedControlsProps> = ({ step, setRelatedListStep }) => {
  const [threats, setThreats] = useState<IThreat[] | []>([]);

  const [controls, setControls] = useState<IControl[] | []>([]);

  const [searchText, setSearchText] = useState<string>('');

  const getRelatedThreats = async () => {
    const items = await getThreats();
    setThreats(items);
  };

  const getSearched = async () => {
    const items = await getControls();
    setControls(items);
  };

  const findControls = controls.filter((control: IControl) =>
    control.details.mitigationGroups?.some((group) =>
      threats?.some((threat: IThreat) => threat.details.group === group && threat.checked)
    )
  );

  useEffect(() => {
    getSearched();
    getRelatedThreats();
  }, [step]);

  return (
    <div className="domains-aside-item">
      <ModalControl btnText="Add control" searchText={searchText} onSearch={setSearchText} />
      <CardDropdown name="relatedControls" content={findControls} setRelatedListStep={setRelatedListStep} />
    </div>
  );
};
