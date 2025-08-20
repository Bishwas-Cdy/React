// const LearnUseState3 = () =>{
//     let [show, setShow] = useState(true);
//     return(
//         <div>
//             {show ?
//                 <p>Hello</p>
//                 <button onClick={() => setShow(false)}>Show</button>
//
//                 :
//                 <button onClick={() => setShow(true)}>Show</button>
//             }
//         </div>
//
//     )
// }
// export default LearnUseState3;
//
//
//
//
//
import React, { useState } from "react";
const LearnUseState3 = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show ? (
                <>
                    <p>Hello</p>
                    <button onClick={() => setShow(false)}>Hide</button>
                </>
            ) : (
                <button onClick={() => setShow(true)}>Show</button>
            )}
        </div>
    );
};

export default LearnUseState3;
