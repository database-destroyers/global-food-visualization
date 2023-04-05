import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'semibold', // Normally, it is "semibold"
      },
      defaultProps: {
        colorScheme: 'teal', // default is gray
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.500',
        fontWeight: 'semibold',
      },
      variants: {
        'title': {
          fontFamily: 'Jura',
          textTransform: 'uppercase',
          size: '3xl',
          fontWeight: 'bold',
        },
        'menu-heading': {
          fontSize: '2xl',
        }
      }
    }
  },
})

export default theme;
