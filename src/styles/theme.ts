import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  grid: {
    container: '144rem',
    gutter: '2.4rem'
  },
  border: {
    radius: {
      none: '0',
      small: '.8rem',
      medium: '1.6rem',
      large: '2.4rem',
      circular: '50%'
    },
    width: {
      small: '.1rem',
      medium: '.2rem',
      large: '.4rem',
      heavy: '.8rem'
    }
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    size: {
      xxsmall: '1.4rem',
      xsmall: '1.8rem',
      small: '2rem',
      xmedium: '2.2rem',
      medium: '2.4rem',
      large: '3.6rem',
      xlarge: '4.8rem',
      xxlarge: '6.4rem',
      vast: '7.2rem',
      gigantic: '9.6rem'
    },
    lineHeight: {
      narrow: '4px',
      medium: '8px',
      away: '16px',
      superaway: '24px'
    }
  },
  icon: {
    size: {
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem'
    }
  },
  color: {
    brandColor700: '#FFCDA3',
    brandColor500: '#FCE2CE',
    brandColor300: '#FFEDE5',
    brandColor100: '#FFF5EF',
    primary: '#46BCF2',
    success: '#16C79A',
    danger: '#EF4F4F',
    warning: '#F6C065',
    info: '#008891',
    gradient1: 'linear-gradient(180deg,#41B197 0%,#283B81 100%)',
    gradient2: 'linear-gradient(90deg,#41B197 0%,#283B81 100%)',
    gradient3: 'linear-gradient(180deg,#2760E3 0%,#32BABB 100%)',
    gradient4: 'linear-gradient(90deg,#32BABB 0%,#2760E3 100%)',
    gray900: '#101010',
    gray700: '#484848',
    gray400: '#9A9A9A',
    gray100: '#999999'
  },
  spacing: {
    none: '0',
    minimum: '.4rem',
    middle: '.8rem',
    xxxsmall: '1.6rem',
    xxsmall: '2.4rem',
    xsmall: '3.2rem',
    small: '4rem',
    medium: '4.8rem',
    large: '5.6rem',
    xlarge: '6.4rem',
    xxlarge: '8rem',
    xxxlarge: '12rem',
    vast: '16rem',
    gigantic: '20rem'
  },
  shadow: {
    level1: '0px 4px 8px rgba(27,28,29,0.08)',
    level2: '0px 8px 24px rgba(27,28,29,0.08)',
    level3: '0px 16px 32px rgba(27,28,29,0.08)',
    level4: '0px 16px 48px rgba(27,28,29,0.08)'
  },
  opacity: {
    level1: 'rgba(27,28,29,0.9)',
    level2: 'rgba(27,28,29,0.64)',
    level3: 'rgba(27,28,29,0.32)',
    level4: 'rgba(27,28,29,0.16)',
    level5: 'rgba(27,28,29,0.08)'
  },
  layers: {
    base: 10,
    overlay: 20,
    modal: 30,
    alwaysOnTop: 40
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}
