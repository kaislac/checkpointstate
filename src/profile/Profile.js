import './profile.css'

const Profile = (props) => {
  console.log(props)
  const { fullName, bio, profession, img } = props.person
  const stylePerson = { color: 'red', display: 'flex', 'text-align': 'center' }

  return (
    <div className='card'>
      <img src={img} alt={fullName} style={{ height: '200px', width: '50%' }} />
      <div className='card-container'>
        <h2 style={stylePerson}>{fullName}</h2>
        <h2>{bio}</h2>
        <h3>{profession}</h3>
      </div>
    </div>
  )
}

export default Profile
