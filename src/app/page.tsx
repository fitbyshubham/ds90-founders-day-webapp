import Slide from "./components_home/Slide"
import Action from "./components_home/Action"
import Team from "./components_home/Team"
import Glass from "./components_home/Glass"
export default function Home(){

  return (

    <>

      <div className="flex  items-center justify-center pt-7 font-bold text-3xl pb-0">
        <h2>The DS90 App.</h2>
      </div>
      <Slide />
      <Action />
      <Glass/>
      <Team />


    </>
    
  )
  

}