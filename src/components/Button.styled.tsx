import styled from 'styled-components';
import { darken } from 'polished';

export interface StyledButtonProps {
  negative?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid
    ${(p) => p.theme.color[p.negative ? 'background' : 'foreground']};
  background-color: ${(p) =>
    p.theme.color[p.negative ? 'foreground' : 'background']};
  color: ${(p) => p.theme.color[p.negative ? 'background' : 'foreground']};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  ${(p) => p.theme.font.size[18]};
  font-family: ${(p) => p.theme.font.secondary};
  text-transform: uppercase;
  font-weight: bold;

  :hover {
    background-color: ${(p) =>
      darken(0.05, p.theme.color[p.negative ? 'foreground' : 'background'])};
  }
`;
