

const styling = {
    display: 'inline-flex',
    // width: '100px',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '2px solid #0a0a0a',
    fontWeight: '800',
    textTransform: 'uppercase'
}

const childStyling = {
    padding: '4px'
}
 
export const Logo = () => {
  return (
    <div style={styling}>
        <span style={{...childStyling, background: '#ffffff', color: '#0a0a0a'}}>Quiz</span>
        <span style={{...childStyling, background: '#0a0a0a', color: '#fff'}}>Let</span>
    </div>
  )
}
