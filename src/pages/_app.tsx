import { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { Header } from '@/components/Header'

/*
  Componente que carrega todas as paginas do projeto
  Está por volta de todas as telas
  Tudo que repete no projeto deveria ser carregado aqui
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
