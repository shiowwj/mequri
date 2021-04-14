import React, { useState } from 'react';
import { CommonConstants } from '../../constants/CommonConstants';

type ButtonComponentProps = {
 title: string;
 additionalClassNames?: string;
};

const defaultButtonClassNames =
 CommonConstants.ButtonDefaultStyles;

const ButtonComponent = ({
 title,
 additionalClassNames = '',
}: ButtonComponentProps) => {
 const [buttonStyles] = useState(
  defaultButtonClassNames + ' ' + additionalClassNames
 );

 return <div className={buttonStyles}>{title}</div>;
};

export default ButtonComponent;
