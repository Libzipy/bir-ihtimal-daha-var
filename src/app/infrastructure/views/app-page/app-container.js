import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../../actions/creators/data-actions'
/* esling-disable */
const AppContainer = () => {
  const [data, setData] = useState('')

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addData({ data }))
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
        {/* <input type="submit" value="Devam Et" /> */}

        <button className="btn-lg" type="submit">
          Veri Ekle
        </button>
      </form>
    </div>
  )
}

export default AppContainer
