import React from 'react';
import { CustomMessageProps } from '../../constants/Props';

const styles = {
  'DEFAULT': 'block my-8 mx-1 py-2 text-center',
  'ERROR': 'border-error bg-red-200 rounded',
  'SUCCESS': 'border-success bg-green-500 rounded'
}

const CustomMessage = ({ message, type }: CustomMessageProps) => {

  const typeOfStyle = type ? styles[type] : '';
  const componentStyles = styles.DEFAULT + ' ' + typeOfStyle;

  return (
    <>
      <div id="message" className={componentStyles}>
        <span>
          {message}
        </span>
      </div>
    </>
  )
}

export default CustomMessage;