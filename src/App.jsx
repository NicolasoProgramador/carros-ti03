import Sedans from "./components/Sedans"
import SuVs from "./components/SuVs"
import Luxuosos from "./components/Luxuosos"



export default function App(){
 return (
   <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
    <main className="lg:flex max-w-[920px]">
      <div>
      <Sedans />
      <SuVs />
      <Luxuosos />
    
      </div>
    </main>
   </main>


 )

} 