import React, { FC, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { EBadgeTypes, EPhaseStatus, EProgressBarTypes, ERiskLevels } from '@interfaces/enums';
import { IRiskLevelProgressData, IProgressPoint } from '@interfaces/interfaces';
import { Badge } from './Badge';
import { ProgressbarPoints } from './ProgressbarPoints';

interface IRiskLevelBadgeWithTooltipProps {
  riskLevel: keyof typeof ERiskLevels;
  riskLevelProgress: IRiskLevelProgressData[];
}

export const RiskLevelBadgeWithTooltip: FC<IRiskLevelBadgeWithTooltipProps> = ({ riskLevel, riskLevelProgress }) => {
  const [progress, setProgress] = useState<IProgressPoint[]>([]);

  useEffect(() => {
    const formattedProgress = riskLevelProgress.map((progress, i) => ({
      title: ERiskLevels[progress.riskLevel],
      date: progress.date,
      ...(!i && { status: EPhaseStatus.active }),
    }));
    setProgress(formattedProgress);
  }, [riskLevelProgress]);
  return (
    <>
      <Badge dataFor="riskLevel-tooltip" badgeText={ERiskLevels[riskLevel]} badgeType={EBadgeTypes[riskLevel]} />
      <ReactTooltip
        id="riskLevel-tooltip"
        place="bottom"
        effect="solid"
        className="tooltip-info"
        backgroundColor="white"
        arrowColor="transparent"
      >
        <ProgressbarPoints progressbarType={EProgressBarTypes.vertical} progressList={progress} />
      </ReactTooltip>
    </>
  );
};
