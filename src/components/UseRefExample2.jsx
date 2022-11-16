import React, { useEffect, useRef, useState } from 'react'

function UseRefExample2() {
    const [name, setName] = useState("")
    const renders = useRef(1)
    const prev = useRef("")

    useEffect(() => {
        renders.current += 1
        console.log(name)
        prev.current = name
    },[name])
    
  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>Prev: {prev.current}</h2>
        <form >
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>
  )
}

export default UseRefExample2