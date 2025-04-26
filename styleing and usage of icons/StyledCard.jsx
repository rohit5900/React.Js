import IconComponent from './IconComponent';
const StyledCard = () => {
  return (
    <div style={{backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px', color: 'darkblue'}} >
        <h1>Styled Card <IconComponent position='absolute' top='10px' right='10px' /></h1>
        <p>This is a styled card component</p>
    </div>
  )
}

export default StyledCard;