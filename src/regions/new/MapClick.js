import { useMapEvents } from 'react-leaflet'


const MapClick = ({cor, setCor}) => {
    useMapEvents({
      click: (e) => {
        const newCor = [...cor, [e.latlng.lat, e.latlng.lng]]
        setCor && setCor(newCor)
      },
    })
    return null
  }


export default MapClick