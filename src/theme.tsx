import {extendTheme} from '@chakra-ui/react';

const fontSizes = {
  heading: {
    1: '24px',
    2: '20px',
    3: '18px',
    "xl": "40px",
  },
  text: {
    "base": '16px',
    "small": '14px',
  },
};

const fontWeights = {
  heading: {
    1: 700,
    2: 600,
    3: 500,
  },
  text: {
    base: 400,
    alternative: 500,
  },
};

const fonts = {
  roboto: "Roboto, sans-serif",
  inter: "'Inter', sans-serif",
  heading: `Roboto, sans-serif`,
  body: `Roboto, sans-serif`,
}



const theme = extendTheme({
  config: {initialColorMode: 'light', useSystemColorMode: false},
  colors: {
    'text-primary': '#001141',
    'text-secondary': '#4D5667',
    'text-tertiary': '#7A869A',
    'text-white': '#FFFFFF',
    'text-danger': '#B71C1C',

    'fill-brand': '#0F62FE',
    'fill-brand-hover': '#0043CE',
    'fill-darkBlue': '#001141',
    'fill-gray': '#F1F2F6',
    'fill-gray-hover': '#E6E8EF',
    'fill-gray-lightest': '#F1F2F6',
    'fill-white': '#FFFFFF',

    'border-brand': '#0F62FE',
    'border-gray': '#CAD1DE',
    'border-danger': '#E32C1E',
  },
  components: {
    Avatar: {
      sizes: {
        md: {
        container: {
          
            width: "38px",
            height: "38px",
          },
        },
      }
    },
    Checkbox: {
      baseStyle: () => ({
        icon: {
          color: "white",
          size: "20px",
        },
        control: {
          padding: 3,
          bg: "white",
          borderColor: "border-gray",
          rounded: "full",
          transitionProperty: 'all',
          transitionDuration: 'normal',
          _focus: {
            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
            borderColor: "fill-brand",
          },
          _hover: {
            borderColor: "fill-brand",
            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
          },
          _checked: {
            bg: "fill-brand",
          },
        },
      }),
    },
    Menu: {
      button: {
        bg: 'fill-gray-hover',
        color: 'text-primary',
        _hover: {
          bg: 'fill-gray',
        },
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '100px',
      },
      variants: {
        outline: {
          border: "none",
          color: 'text-primary',
          bg: 'fill-gray',
          _hover: {
            bg: 'transparent',
          },
        },
        ghost: {
          bg: 'fill-gray-hover',
          color: 'text-primary',
          _hover: {
            bg: 'fill-gray',
          },
        },
        solid: {
          bg: 'fill-brand',
          backgroundColor: 'fill-brand',
          color: '#FFFFFF',   
        },
      },
    },
  },
  fontSizes,
  fontWeights,
  fonts,
});

export default theme;
