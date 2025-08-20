// import {useState} from "react";
//
// const LearnUseState1 = () => {
//     let [name, setState] = useState("Bishwas");
//     return(
//         <div>
//             <p>name is {name}</p>
//             <button onClick={() => {
//                 setState("New Name");
//             }}>Change Name</button>
//         </div>
//     )
// }
// export default LearnUseState1;
import { useState} from "react";
const LearnUseState1 = () => {
    let [name, setName] = useState("Old Name");
    const updateName = ()=>{
        setName("Name Changed")
    }
    return(
        <div>
            <p>{name}</p>
            <button onClick={updateName}>Update</button>
        </div>
    )
}
export default LearnUseState1;