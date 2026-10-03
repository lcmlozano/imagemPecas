import { PrimeiroComponente, ArrowFunction } from '../components/PrimeiroComponente'

export default function Home() {
  return (
    <>
       <PrimeiroComponente />

      <PrimeiroComponente 
          mensagem = 'Olá, esta mensagem estou passando como parâmetro' 
          mensagemDoBotao = 'Essa é a msg do botão' />

        <PrimeiroComponente 
          mensagem = 'Sou outro componente, mas com outra mensagem' 
          mensagemDoBotao = 'Clicaram em mim' />

      <ArrowFunction />
    </>
  );
}
