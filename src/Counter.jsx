import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    const handleAddClick = () => {
        setCount(count + 1)
    };
    
    const handleRemoveClick = () => {
        setCount(count - 1)
    };
    return(

        <div>
            <button onClick={handleAddClick}>+1</button>
            <p>{count}</p>
            <button onClick={handleRemoveClick}>-1</button>
        </div>
    )
}

export default Counter;