import React, { FC } from 'react';
import { FieldArray } from 'formik';
import { IControl, IThreat } from '@interfaces/interfaces';
import { CardDropDownContent } from '@components/common/CardDropDownContent';

interface ICardDropdownProps {
  name: string;
  content?: IThreat[] | IControl[];
  setRelatedListStep?: () => void;
}

export const CardDropdown: FC<ICardDropdownProps> = ({ name, content = [], setRelatedListStep = (): null => null }) => (
  <FieldArray
    name={name}
    render={() => (
      <div>
        {content.map((item, index) => (
          <CardDropDownContent
            name={`${name}[${index}]`}
            item={item}
            content={content}
            setRelatedListStep={setRelatedListStep}
            key={item.id}
          />
        ))}
      </div>
    )}
  />
);
