'use client'
export function PrimeiroComponente() {
  
  function handleClick() {
    console.log("Cliquei no botão");
  }

  return (
    <div>
      Meu primeiro componente

      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}  

export const ArrowFunction = () => {
  return (
    <h2>Arrow Function</h2>
  )
}



