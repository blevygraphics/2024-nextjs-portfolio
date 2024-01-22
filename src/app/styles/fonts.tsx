import { Inter, Anton } from 'next/font/google'

// define your variable fonts
const inter = Inter({ subsets: ['latin'] })
// define 2 weights of a non-variable font
const anton = Anton({ weight: '400', subsets: ['latin'] })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder

export { inter, anton }