import React, { useState } from 'react'

const AppContainer = () => {
  const [data, setData] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log('go')
  }

  return (
    <div className="app-container">
      <form onSubmit={onSubmitHandler}>
        <input
          className="app-container-input"
          type="text"
          placeholder="hello"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input type="submit" value="Devam Et" />

        {/* 
        <button className="btn-lg" type="submit">
          
        </button> */}
      </form>
    </div>
  )
}

export default AppContainer
