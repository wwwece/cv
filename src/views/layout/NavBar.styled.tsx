import styled from 'styled-components';
import { randomColor } from '../../theme';

export const NAV_ITEM_WIDTH = 280;

export const NavBarContainer = styled.div`
  button.nav-menu-button {
    margin-left: auto;
    margin-right: auto;
  }

  > ul.nav-items {
    display: flex;
    justify-content: center;
    align-items: stretch;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media ${(p) => p.theme.breakpoint.tablet} {
    > ul.nav-items {
      position: absolute;
      left: 0;
      height: 0;
      overflow: hidden;
      background-color: ${(p) => p.theme.color.foreground};
      flex-wrap: wrap;
      width: 100vw;
      justify-content: stretch;
      align-items: stretch;

      &.is-open {
        height: 136px;
        transition: height 0.3s ease-out;
      }
    }
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    > ul.nav-items {
      &.is-open {
        height: 256px;
      }
    }
  }
`;

export const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${NAV_ITEM_WIDTH}px;
    height: 100%;
    padding: ${(p) => p.theme.spacing.lg};
    cursor: pointer;

    text-align: center;
    text-decoration: none;

    &.is-active,
    :hover {
      > span {
        transform: rotate(-2.5deg);
      }
    }

    &.is-active {
      text-decoration: underline;
    }

    ${(p) => {
      switch (p.theme.colorTheme) {
        case 'color':
          return `
            background-color: ${randomColor()};
            color: ${p.theme.color.foreground};
            opacity: 0.75;
            &.is-active, :hover {
              opacity: 1;
            }
            :active {
              opacity: 0.75;
            }
          `;
        default:
          return `
            background-color: none;
            color: ${p.theme.color.text};
          `;
      }
    }}

    transition: 0.5s;

    ${(p) => p.theme.font.size[24]};
  }

  @media ${(p) => p.theme.breakpoint.tablet} {
    width: 50vw;
    a {
      width: 50vw;
    }
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    width: 100vw;
    a {
      width: 100vw;
    }
  }
`;
