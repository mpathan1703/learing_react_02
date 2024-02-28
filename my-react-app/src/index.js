
 // this is a root file of react project 

import {createRoot} from "react-dom/client"
import FirstCompo from "./FirstCompo";



const data=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"]

createRoot(document.getElementById("root")).render(
    <>
    
        {data.map((ele)=>{
            return <FirstCompo name={ele} key={ele}/>
        })}

   
    
    
    
    </>


)


