import { observer } from 'mobx-react-lite';
import React from 'react';
import Icon, { IconType } from '../../components/Icon';
import { useStore } from '../../store';
import { Colors, randomColor } from '../../theme';
import { StyledInfoBar, StyledInfoItem } from './InfoBar.styled';

interface InfoElement {
  text: string;
  textPrefix?: string;
  icon: IconType;
  link?: string;
}

const InfoBar: React.FC = observer(() => {
  const {
    uiStore: { colorTheme },
    eventsStore: { triggerEvent },
  } = useStore();

  const elements: InfoElement[] = [
    {
      icon: 'Person',
      text: 'Toni Weckroth',
    },
    {
      textPrefix: 'toni.weckroth',
      icon: 'Email',
      text: 'gmail.com',
      link: 'mailto:toni.weckroth@gmail.com',
    },
    {
      icon: 'Github',
      text: 'Github (WeceW)',
      link: 'https://github.com/WeceW',
    },
    {
      icon: 'LinkedIn',
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/toni-weckroth/',
    },
  ];

  const triggerLinkClickedEvent = (linkTarget?: string) => {
    triggerEvent('link-clicked', { linkTarget });
  };

  return (
    <StyledInfoBar>
      {elements.map(({ text, textPrefix, icon, link }) => (
        <StyledInfoItem key={`${text}-${icon}`}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={() => triggerLinkClickedEvent(link)}
          >
            {textPrefix}
            <Icon
              type={icon}
              colorKey="foreground"
              color={colorTheme === 'color' ? randomColor() : Colors.foreground}
              size="1rem"
            />
            {text}
          </a>
        </StyledInfoItem>
      ))}
    </StyledInfoBar>
  );
});

export default InfoBar;
