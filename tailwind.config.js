const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    important: false,
    separator: ":",
    purge: {
        enabled: false,
        content: ["./**/*.cshtml", "./**/*.html"],
        safelist: []
    },
    theme: {
        //fontFamily: {
        //    sans: ['Roboto', ...fontFamily.sans],
        //    serif: [...fontFamily.serif],
        //    mono: [...fontFamily.mono]
        //},
        //screens: {
        //    'xs': '480px',
        //    'sm': '768px',
        //    'md': '1024px',
        //    'lg': '1280px',
        //    'xl': '1600px',
        //    '2xl': '1920px',
        //},
        extend: {
            animation: {
                scaleout: 'scaleout 1.0s infinite ease-in-out'
            },
            keyframes: {
                scaleout: {
                    '0%': { transform: 'scale(0)' },
                    '100%': {
                        transform: 'scale(1.0)',
                        opacity: '0'
                    }
                }
            },

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
                warning: 'var(--warning)',
                warningIcon: 'var(--warningIcon)',
                errorBlock: 'var(--errorBlock)',
                errorBlockIcon: 'var(--errorBlockIcon)',
                success: 'var(--success)',
                successIcon: 'var(--successIcon)',
                grayStatus: 'var(--grayStatus)',
                redStatus: 'var(--redStatus)',
                yellowStatus: 'var(--yellowStatus)',
                greenStatus: 'var(--greenStatus)',
                blueStatus: 'var(--blueStatus)',
                magentaStatus: 'var(--magentaStatus)',
            },
            minHeight: {
                '500px': '500px'
            },
            width: {
                '400px': '400px'
            },
        },
    },
    variants: {
        //extend: {
        
        //}
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};