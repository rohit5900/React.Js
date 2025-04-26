import IconComponent from './IconComponent';
const ProfileCard = () => {
    const styles={
        card: {
            backgroundColor: 'lightgrey',
            padding: '20px',
            borderRadius: '10px',
            color: 'black'
        }
    }
  return (
    <div style={styles.card}>
        <h1>Profile Card <IconComponent /></h1>
        <p>This is a profile card component</p>
    </div>
  )
}

export default ProfileCard;