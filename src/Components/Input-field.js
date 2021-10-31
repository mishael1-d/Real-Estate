import React, { useEffect, useRef } from 'react'

const InputField = () => {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })

    return (
        <div className="input">
            <div className="input-content">
            <p>Quick Search</p>
            <input type="text" placeholder="Type of apartment" ref={inputRef}/>
            <input type="text" placeholder="Number of rooms"/>
            <input type="text" placeholder="Price range"/>
            <input type="text" placeholder="Location"/>
            <button type="submit">Find an apartment</button>
            </div>
        </div>
    )
}

export default InputField
