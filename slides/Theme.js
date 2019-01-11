import { future as theme } from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

export default {
  ...theme,
  colors: {
    link: '#fff',
  },
  prism: {
    style: atomDark
  },
}