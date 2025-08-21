import React from 'react';

interface HeaderProps {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkTheme, setDarkTheme }) => (
  <header>
    <div className="logo" aria-label="Nakulan JS Logo">Nakulan JS</div>
    <label className="theme-toggle" htmlFor="toggleTheme">
      Theme: <span>Black / White</span>
      <input
        type="checkbox"
        id="toggleTheme"
        checked={darkTheme}
        onChange={e => setDarkTheme(e.target.checked)}
        hidden
      />
    </label>
  </header>
);

export default Header;
