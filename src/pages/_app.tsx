import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.scss'
import { Header } from '@/components/Header'

/*
  Componente que carrega todas as paginas do projeto
  Está por volta de todas as telas
  Tudo que repete no projeto deveria ser carregado aqui
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
