import styled from 'styled-components';
import { lightTheme } from '~/styles/theme';

export default function ThemeToggle({ toggleTheme, theme }) {
  return (
    <ToggleWrapper onClick={toggleTheme} theme={theme}>
      {theme === lightTheme ? '🌝' : '🌚'}
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 6%;
  right: 3%;

  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.bgColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${(props) =>
    props.theme === lightTheme
      ? '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
      : '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'};
`;
