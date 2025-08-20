// const List = () =>{
//
//     // const Arr = ["Apple","Banana","Mango"]
//     const obj = [{id: 1, name : "Apple", calories: 75},
//                                             {id: 2, name : "Mango", calories: 57},
//                                             {id: 3, name : "Banana", calories: 98},
//     ]
//     // obj.sort((a,b) =>a.name.localeCompare(b.name))
//     return(
//         <div>
//             {
//                 obj.map((value) =>{
//                     return(
//                         <div key={value.id}>
//                             <ul>
//                                 {value.id}: &nbsp; {value.name}: &nbsp; {value.calories}
//                             </ul>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default  List;



const List = () => {
    const obj = [
        { id: 1, name: "Apple", calories: 75 },
        { id: 2, name: "Mango", calories: 57 },
        { id: 3, name: "Banana", calories: 98 },
    ];

    // Sort alphabetically by name (without mutating original)
    // const sortedObj = [...obj].sort((a, b) => a.name.localeCompare(b.name));

    const highCal = obj.filter((value)=> value.calories>60);
    return (
        <ol>
            {highCal.map((value) => (
                <li key={value.id}>
                    {value.name}: <b>{value.calories}</b>
                </li>
            ))}
        </ol>
    );
};

export default List;
