const { colors, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    minWidth: {
      "14": "3.5rem",
    },
    
    extend: {
     
      colors: {
        themePrimary: 'var(--themePrimary)',
        themeLighterAlt: 'var(--themeLighterAlt)',
        themeLighter: 'var(--themeLighter)',
        themeLight: 'var(--themeLight)',
        themeTertiary: 'var(--themeTertiary)',
        themeSecondary: 'var(--themeSecondary)',
        themeDarkAlt: 'var(--themeDarkAlt)',
        themeDark: 'var(--themeDark)',
        themeDarker: 'var(--themeDarker)',
        neutralLighterAlt: 'var(--neutralLighterAlt)',
        neutralLighter: 'var(--neutralLighter)',
        neutralLight: 'var(--neutralLight)',
        neutralQuaternaryAlt: 'var(--neutralQuaternaryAlt)',
        neutralQuaternary: 'var(--neutralQuaternary)',
        neutralTertiaryAlt: 'var(--neutralTertiaryAlt)',
        neutralTertiary: 'var(--neutralTertiary)',
        neutralSecondary: 'var(--neutralSecondary)',
        neutralPrimaryAlt: 'var(--neutralPrimaryAlt)',
        neutralPrimary: 'var(--neutralPrimary)',
        neutralDark: 'var(--neutralDark)',
        black: 'var(--black)',
        white: 'var(--white)',
        warning: 'var(--warning)',
        warningIcon: 'var(--warningIcon)',
        errorBlock: 'var(--errorBlock)',
        errorBlockIcon: 'var(--errorBlockIcon)',
        success: 'var(--success)',
        successIcon: 'var(--successIcon)',
        lightGray: 'var(--lightGray)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        blue: 'var(--blue)',
        magenta: 'var(--magenta)',
        ...colors
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
