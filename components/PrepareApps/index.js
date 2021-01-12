import StartUp from '../StartUp';
import Initialize from '../Initialize';
import React, { useEffect, useState } from 'react';

const PrepareApps = () => {
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialized(true)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    initialized ? <StartUp /> : <Initialize />
  )
}

export default PrepareApps
