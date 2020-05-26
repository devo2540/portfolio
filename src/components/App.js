import React, { useEffect } from 'react'
import { flamelinkApp } from '../flamelink/index'

const App = () => {
  const fetchFlameLinkData = async () => {
    const homepageData = await flamelinkApp.content.get({ schemaKey: 'homepage' })
    console.log(homepageData)
  }
  
  useEffect(() => {
    console.log('App Loaded')
    fetchFlameLinkData()
  })

  return ( 
    <div>I'm the App!</div>
   );
}
 
export default App;