import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { getIn, useFormikContext } from 'formik';
import classNames from 'classnames';
import { format } from 'date-fns';
import { ICommentWithAuthor, IControl, IThreat, IIRAComment } from '@interfaces/interfaces';
import { Btn } from '@components/common/form-controls/Btn';
import { Checkbox } from '@components/common/form-controls/Checkbox';
import { PropertiesCard } from '@components/common/PropertiesCard';
import { Heading } from '@components/common/Heading';
import { DatePickerComponent } from '@components/common/form-controls/DatePicker';
import { useSelector } from 'react-redux';
import { AddComments } from '@/components/common/AddComments';
import { getComment } from '@/utils/getComments';
import { EThreatsControlsPath } from '@/interfaces/enums';
import { addComment } from '@/utils/AddComment';
import { selectUser } from '@/store/selectors/auth';

interface ICardDropDownContentProps {
  name: string;
  item: IThreat | IControl;
  content?: IControl[] | IThreat[];
  setRelatedListStep: () => void;
}

export const CardDropDownContent: FC<ICardDropDownContentProps> = ({ name, content, item, setRelatedListStep }) => {
  const { values, handleChange, setFieldValue } = useFormikContext();
  const user = useSelector(selectUser);
  const [dropdown, setDropdown] = useState(false);
  const [commentWithAuthor, setCommentWithAuthor] = useState<ICommentWithAuthor>(null);

  const commentName = `${name}.comment`;
  const checkedName = `${name}.checked`;
  const dueDateName = `${name}.dueDate`;

  const commentValue = getIn(values, commentName);

  const modalControl: EThreatsControlsPath = content[0]?.details.affectLevel
    ? EThreatsControlsPath.controls
    : EThreatsControlsPath.threats;

  const getCurrentComment = async () => {
    const currentComment = await getComment({ type: modalControl, id: item.id });
    setCommentWithAuthor(currentComment);

    setFieldValue(commentName, currentComment?.comment?.text);
    setFieldValue(checkedName, currentComment?.checked);
  };

  useEffect(() => {
    getCurrentComment();
  }, []);

  const updateCommentData = async (checked = false): Promise<IIRAComment> => {
    const comment = await addComment(
      {
        comment: { text: getIn(values, commentName), authorId: user.id, date: format(new Date(), 'MM/dd/yyyy') },
        checked,
        dueDate: getIn(values, dueDateName),
        id: item.id,
        elementType: modalControl,
      },
      modalControl
    );
    return comment;
  };

  const dropdownCheck = async (e: ChangeEvent) => {
    handleChange(e);
    setDropdown(true);
    await updateCommentData(!getIn(values, checkedName));
  };

  const updateComment = async () => {
    const comment = await updateCommentData();
    setCommentWithAuthor((prevState) => ({ ...prevState, comment }));
  };

  useEffect(() => {
    if (commentValue) {
      updateComment();
    }
  }, [commentValue]);

  return (
    <div className="card-dropdown open">
      <div className="card-dropdown-heading">
        <div className="card-dropdown-heading-inner">
          <Btn
            btnStatus={classNames('btn-xs-primary mr-10', { active: dropdown })}
            btnIcon={classNames('icon-arrow-border-down', { active: dropdown })}
            onClick={() => setDropdown(!dropdown)}
          />
          <div className="card-dropdown-header">
            <span className="card-dropdown-title">{item.name}</span>
            <span className="card-dropdown-subtitle">{item.category}</span>
          </div>
        </div>
        <Checkbox name={checkedName} checked={getIn(values, checkedName)} onChange={dropdownCheck} />
      </div>
      {dropdown && (
        <div className="card-dropdown-content">
          {!getIn(values, checkedName) && !commentValue ? (
            <AddComments name={commentName} />
          ) : (
            <PropertiesCard type={modalControl} content={item?.details} />
          )}

          {modalControl === EThreatsControlsPath.controls && getIn(values, checkedName) && (
            <>
              <DatePickerComponent
                formLabel="Due Date"
                value={getIn(values, dueDateName)}
                name={dueDateName}
                onChange={setFieldValue}
              />

              <div className="btn-details">
                <span className="tickets-details">List of Related Threats</span>
                <Btn
                  btnStatus="btn-xs-primary"
                  btnIcon="icon-arrow-border-right"
                  onClick={() => {
                    setRelatedListStep();
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}
      {commentWithAuthor?.comment?.text && (
        <div className="card-dropdown-comment">
          <Heading
            headingText={commentWithAuthor.authorName}
            headingNumber={`· ${commentWithAuthor.comment.date}`}
            linkText="More"
            linkIcon="icon-ellipsis-vertival"
          />
          <div className="card-dropdown-text">{commentWithAuthor.comment.text}</div>
        </div>
      )}
    </div>
  );
};
