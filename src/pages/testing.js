import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Testing = () => {
  const [resType, setResType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resType])

  return (
    <div>
      <h1>Xwing-Sauce Testing</h1>
      <Link to="/">Home</Link>
      <br />
      <br />
      <div>
        <button onClick={() => setResType("posts")}>Posts</button>
        <button onClick={() => setResType("users")}>Users</button>
        <button onClick={() => setResType("comments")}>Comments</button>
      </div>
      <h2>{resType}</h2>
      {items.map(item => {
        // return <pre key={item.id}>{item.name || item.title}</pre>
        return (
          <pre key={item.id}>
            {item.name && <h2>{item.name} - is the name</h2>}
            {item.title && <h2>{item.title} - is the title</h2>}
          </pre>
        )
        // return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </div>
  )
}

export default Testing
