import iconSedans from "./assets/carros-base/icon-sedans.svg"
import iconSuvs from "./assets/carros-base/icon-suvs.svg"
import iconLuxury from  "./assets/carros-base/icon-luxury.svg"



export default function App(){
 return (
   <main>
    <section>
      <div className="bg-orange">
        <img src={iconSedans} alt="icone dos carro sedans" />
        <h2 className="font-shoulders">Sedans</h2>
        <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
      </div>

      <div className="bg-green">
        <img src= {iconSuvs} alt="icone dos carros suv" />
        <h2 className="font-shoulders">SuVs</h2>
        <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver Mais</a>
      </div>

      <div className="bg-dark-green">
        <img src= {iconLuxury} alt="icone dos carros de luxo" />
        <h2 className="font-shoulders">Luxuosos</h2>
        <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
      </div>
    </section>
   </main>


 )

} 