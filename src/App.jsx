import iconSedans from "./assets/carros-base/icon-sedans.svg"
import iconSuvs from "./assets/carros-base/icon-suvs.svg"
import iconLuxury from  "./assets/carros-base/icon-luxury.svg"



export default function App(){
 return (
   <main className="min-h-svh bg-offwhitebg py-20 px-6">
    <section>
      <div className="bg-orange p-12 rounded-t-lg">
        <img src={iconSedans} alt="icone dos carro sedans" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange">Ver mais</a>
      </div>

      <div className="bg-green p-12">
        <img src= {iconSuvs} alt="icone dos carros suv" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SuVs</h2>
        <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green">Ver Mais</a>
      </div>

      <div className="bg-dark-green p-12 rounded-b-lg">
        <img src= {iconLuxury} alt="icone dos carros de luxo mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>  
        <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green">Ver Mais</a>
      </div>
    </section>
   </main>


 )

} 