import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DARK, LIGHT } from './themes.js';

const Section = styled.section`
  margin: 20px 0 0 20px;
`;

const Label = styled.label`
  color: white;
  background-color: black;
  font-size: 1.2em;
`;

export function ThemeToggle({ onThemeChange }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'default'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    onThemeChange(theme);
  }, [theme]);

  function onChange(ev) {
    const newValue = theme === DARK ? LIGHT : DARK;
    setTheme(newValue);
  }

  return (
    <Section>
      <Label>
        <input
          type="checkbox"
          name="theme"
          value="theme"
          checked={theme === DARK}
          onChange={onChange}
        />
        &nbsp;Dark&nbsp;Theme
      </Label>
    </Section>
  );
}
