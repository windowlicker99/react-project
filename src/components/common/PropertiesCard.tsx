/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Property } from '@components/common/Property';
import { threatDetails, controlDetails, riskLevelDetails, controlDetailsPage } from '@/constants/controlThreatDetails';

interface IThumbProps {
  content?: any;
  type?: string;
}

const switchPropertyContent = (type: string, content: any) => {
  switch (type) {
    case 'threats': {
      return Object.keys(content).map((key: keyof typeof threatDetails) => (
        <React.Fragment key={content[key]}>
          <Property name={threatDetails[key]} value={content[key]} />
        </React.Fragment>
      ));
    }
    case 'controls': {
      return Object.keys(content).map((key: keyof typeof controlDetails) => (
        <React.Fragment key={content[key]}>
          <Property name={controlDetails[key]} value={content[key]} />
        </React.Fragment>
      ));
    }
    case 'controlsPage': {
      return Object.keys(content).map((key: keyof typeof controlDetails) => (
        <React.Fragment key={content[key]}>
          <Property name={controlDetailsPage[key]} value={content[key].toString()} />
        </React.Fragment>
      ));
    }
    case 'riskLevel': {
      return Object.keys(content).map((key: keyof typeof riskLevelDetails) => (
        <React.Fragment key={content[key]}>
          <Property name={riskLevelDetails[key]} value={content[key]} />
        </React.Fragment>
      ));
    }
    default:
      return null;
  }
};

export const PropertiesCard: FC<IThumbProps> = ({ content, type }) => (
  <div className="table-dropdown-group content-stretch">{switchPropertyContent(type, content)}</div>
);
