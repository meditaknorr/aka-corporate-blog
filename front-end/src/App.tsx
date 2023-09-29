import { useState, useEffect, useRef } from 'react'

function App() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log("Version ->", import.meta.env.VITE_APP_VERSION);
    console.log("Environment ->", import.meta.env.VITE_APP_ENV);
  }, [])

  return <>App Test</>
}

export default App
