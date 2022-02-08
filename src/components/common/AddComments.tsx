import React, { ChangeEventHandler, FC, useState } from 'react';
import { getIn, useFormikContext } from 'formik';
import { Textarea } from '@components/common/form-controls/Textarea';
import { Btn } from '@components/common/form-controls/Btn';

interface AddCommentProps {
  name: string;
}

export const AddComments: FC<AddCommentProps> = ({ name }) => {
  const { errors, touched, setFieldValue } = useFormikContext();
  const [comment, setComment] = useState('');
  const handleChangeFieldValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const {
      target: { value },
    } = e;
    setComment(value);
  };
  const handleResetComment = () => setComment('');
  const handleApplyComment = () => setFieldValue(name, comment);
  return (
    <>
      <Textarea
        placeholder="Add a message"
        error={getIn(touched, name) && getIn(errors, name)}
        value={comment}
        name={name}
        onChange={handleChangeFieldValue}
      />
      <div className="btn-group mt-30 flex-end">
        <Btn btnStatus="btn-lg-outline mr-15" btnText="Cancel" onClick={handleResetComment} />
        <Btn btnStatus="btn-lg-primary" btnText="Apply" disabledBtn={!comment} onClick={handleApplyComment} />
      </div>
    </>
  );
};
