import {useState} from "react";
const LearnUseState2 = () => {
    let [count, setCount] = useState(0);
    return(
        <div>
            <p>Count is {count}</p>
            <button onClick={() => {
                if (count < 10) {
                    setCount(count + 1);
                }
            }}>Increment by 1</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }}>Decrement by 1</button>
        </div>
    )
}
export default LearnUseState2;