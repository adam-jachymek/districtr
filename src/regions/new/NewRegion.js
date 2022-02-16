import React, { useState, useEffect } from "react";
import Map from "../Map";
import Alert from './Alert'
import "./style.sass"


const NewRegion = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cor, setCor] = useState([]);
  const [alert, setAlert] = useState({show: false , type: ''})

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, 4000)

    return () => clearTimeout(timer);

  }, [alert])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data =  JSON.parse(localStorage.getItem('data')) || [];

    if (name && description && cor.length > 2) {
      const id = new Date().getTime().toString()
      const newData = [...data, {id, name, description, cor}]
      localStorage.setItem("data", JSON.stringify(newData));
      setName('')
      setDescription('')
      setCor([])
      setAlert({show: true, type: 'success'})
    } else {
        setAlert({show: true, type: 'error'})
    }
  }

  const resetMap = () => {
    setCor([])
  }

  const undoClick = () => {
    const newCor = [...cor]
    newCor.splice(-1)
    setCor(newCor)
  }

  return (
    <div className="wrapper">
      <Alert alert={alert}/>
      <h3>Add new region</h3>

      <form onSubmit={handleSubmit}>

        <div className="wrapper__fields">
          <div className="wrapper__name">
            <label>Name: </label>
            <input name="name" value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="wrapper__description">
            <label>Description: </label>
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button type="submit">Add new region</button>
        </div>

        <label className="map-label">Click on the map to draw (minimum 3 points)</label>

        <Map cor={cor} setCor={setCor}/>
        
      </form>

      <button className="map-buttons" onClick={() => resetMap()}>Reset</button>
      <button className="map-buttons" onClick={() => undoClick()}>Undo</button>
    </div>
)
}


export default NewRegion;