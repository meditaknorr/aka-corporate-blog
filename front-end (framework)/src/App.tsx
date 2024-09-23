import { useState, useEffect, useRef } from 'react'

function App() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.info(`${import.meta.env.VITE_APP_NAME} by ${import.meta.env.VITE_APP_DEVELOPER}`);
    console.info(`Nerds Properties: ${import.meta.env.VITE_APP_VERSION} | ${import.meta.env.VITE_APP_ENVIRONMENT}`);
  }, [])

  return <>App Test</>
}

export default App
