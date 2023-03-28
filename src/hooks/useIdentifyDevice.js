import { useEffect, useState } from 'react'

const useIdentifyDevice = () => {
  const [device, setDevice] = useState("")
  const [screenSize, getDimension] = useState(window.innerWidth);

  const setDimension = () => {
    getDimension(window.innerWidth)
    if(screenSize < 768){
      setDevice("mobile")
    }else{
      setDevice("desktop")
    }
  }
  useEffect(() => {
    if(screenSize < 768){
      setDevice("mobile")
    }else{
      setDevice("desktop")
    }
  }, [screenSize])
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return {
    device
  }
}

export default useIdentifyDevice