import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DARK, getTheme, LIGHT } from './themes.js';

const THEME_NAME = 'theme-name'; // local storage key

const Section = styled.section`
  margin: 20px 0 0 20px;
`;

const Label = styled.label`
  color: white;
  background-color: black;
  font-size: 1.2em;
`;

export function ThemeToggle({ onThemeChange }) {
  const [themeName, setThemeName] = useState(
    localStorage.getItem(THEME_NAME) || 'default'
  );

  useEffect(() => {
    localStorage.setItem(THEME_NAME, themeName);
    onThemeChange(getTheme(themeName));
  }, [themeName]);

  function onChange(ev) {
    setThemeName(themeName === DARK ? LIGHT : DARK); // invert theme
  }

  return (
    <Section>
      <Label>
        <input
          type="checkbox"
          name="theme"
          value="theme"
          checked={themeName === DARK}
          onChange={onChange}
        />
        &nbsp;Dark&nbsp;Theme
      </Label>
    </Section>
  );
}
