import React, { FC, useCallback, useEffect, useState, MouseEventHandler } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormikProps, FormikValues } from 'formik';
import classNames from 'classnames';
import { Btn } from './Btn';

interface IUpload extends Partial<FormikProps<FormikValues>> {
  name?: string;
  value?: File;
}

export const Upload: FC<IUpload> = ({ name, value, setFieldValue }) => {
  const [image, setImage] = useState('');

  const updateImage = (file: File) => {
    URL.revokeObjectURL(image);
    const newImageUrl = URL.createObjectURL(file);
    setImage(newImageUrl);
  };
  const onDrop = useCallback(([file]) => {
    updateImage(file);
    setFieldValue(name, file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onDeleteImage: MouseEventHandler = (e) => {
    e.stopPropagation();
    URL.revokeObjectURL(image);
    setImage(null);
    setFieldValue(name, '');
  };

  useEffect(() => {
    if (value) {
      updateImage(value);
    } else {
      setImage('');
      URL.revokeObjectURL(image);
    }
  }, [value]);

  return (
    <div className="upload upload-icon" {...getRootProps()}>
      {Boolean(image) && <Btn btnStatus="btn-xs-secondary" btnIcon="icon-close" onClick={onDeleteImage} />}
      <input {...getInputProps()} /> {/* toggle class upload-icon */}
      <img src={image} alt="" className={classNames('upload-img', { show: Boolean(image) })} />
      {/* toggle show/hide */}
      {!image && (
        <div className="upload-content">
          <div className="upload-text">
            Drop a Vehicle photo here, or <span className="link">click to browse</span>
          </div>
        </div>
      )}
    </div>
  );
};
