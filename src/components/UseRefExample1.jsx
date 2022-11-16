import { useRef } from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = "@user-"+inputRef.current.value
        console.log(inputRef.current.value)
        paraRef.current.innerText = "Processing"
      }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
            <button type="submit" className='btn btn-primary'>Submit</button>
            <p ref={paraRef} onClick={() =>inputRef.current.focus()}>hello</p>
        </form>
    )
}

export default UseRefExample1