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
        fontWeight: 'regular',
        size: 'lg',
      },
      variants: {
        'title': {
          fontFamily: 'Jura',
          textTransform: 'uppercase',
          size: '3xl',
          fontWeight: 'bold',
        }
      }
    }
  },
})

export default theme;
