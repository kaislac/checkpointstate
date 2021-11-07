import './App.css'
import Profile from './profile/Profile'
import image from './imageInSrc.jpg'
import { useState } from 'react'

function App() {
  const [showProfile, setShowProfile] = useState(true)
  const person = {
    fullName: 'kais lachaal',
    bio: 'M',
    profession: 'Ingeneer',
    img: image,
  }
  const handleName = () => {
    alert(person.fullName)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        {showProfile && (
          <Profile person={person} onClick={() => handleName()} />
        )}
      </header>
      <button onClick={() => setShowProfile(!showProfile)}>
        Affiche profile
      </button>
    </div>
  )
}

export default App
