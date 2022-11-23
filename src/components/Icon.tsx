import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import {
  FaAt,
  FaBars,
  FaChevronUp,
  FaGithub,
  FaLinkedin,
  FaPaintRoller,
  FaPowerOff,
  FaSkull,
  FaSpinner,
  FaUserAstronaut,
} from 'react-icons/fa';
import { ColorsType } from '../theme/styled';

const Icons = {
  ChangeTheme: FaPaintRoller,
  ChevronUp: FaChevronUp,
  Email: FaAt,
  Error: FaSkull,
  Github: FaGithub,
  LinkedIn: FaLinkedin,
  Menu: FaBars,
  Person: FaUserAstronaut,
  PowerOff: FaPowerOff,
  Spinner: FaSpinner,
};

export type IconType = keyof typeof Icons;
export type IconColor = keyof ColorsType;

interface Props {
  type: IconType;
  color?: string;
  colorKey?: IconColor;
  size?: number | string;
  className?: string;
}

const Icon: FC<Props> = ({
  type,
  color,
  colorKey = 'primary' as unknown as IconColor,
  size = '2rem',
  className,
}) => {
  const theme = useTheme();

  const iconColor = color ?? (colorKey ? theme.color[colorKey] : undefined);

  const iconProps = {
    size,
    color: typeof iconColor === 'string' ? iconColor : undefined,
    className,
  };

  const IconComponent = Icons[type];

  return <IconComponent {...iconProps} />;
};

export default Icon;
