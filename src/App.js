import { useState } from "react";
export default Counter
function Counter() {
  let [count, setcount] = useState(0)

  function update(e, vikas) {
    e.preventDefault()
    vikas === 'inc' ? (count < 10) && setcount(count + 1) : (count > 0) && setcount(count - 1)
  }

  return (
    <>
    
      <button onClick={(e) => update(e, "dec")}>decrement</button>
      <p>{count}</p>
      <button onClick={(e) => update(e, "inc")}>increment</button>

    </>
  )
}