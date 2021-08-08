import { AppProps } from 'next/app'

import '@/styles/globals.scss'

/*
  Componente que carrega todas as paginas do projeto
  Está por volta de todas as telas
  Tudo que repete no projeto deveria ser carregado aqui
*/

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
