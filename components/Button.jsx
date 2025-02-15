import React from 'react'

const styling = {
    padding: '8px 16px',
    fontSize: '1.2rem',
    color: 'var(--background)',
    fontWeight: '600',
    borderRadius: '.25rem'
}

export const Button = (props) => {
  return (
    <button style={styling} {...props}>
        {props.children}
    </button>
  )
}
