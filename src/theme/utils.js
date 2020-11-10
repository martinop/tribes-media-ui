const defaultTheme = {
  primary: '#61DAFB',
  secondary: '#254E70',
};

export const mapTheme = (variables) => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
  };
};

export const applyTheme = (theme) => {
  const themeObject = mapTheme(theme || defaultTheme);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }
    root.style.setProperty(property, themeObject[property]);
	});
};