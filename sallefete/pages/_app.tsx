import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand,Cormorant_Garamond} from 'next/font/google'

const quicksand=Quicksand({
  subsets : ['latin'],
  weight  :['400', '600'],
  variable : '--font-quick'
},
)
const gor=Cormorant_Garamond({
  subsets : ['latin'],
  weight  :['400'],
  variable : '--font-gor'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
<>
      <style jsx global>
        {`
          :root {
            --font-quick: ${quicksand.style.fontFamily};
            --font-gor: ${gor.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
