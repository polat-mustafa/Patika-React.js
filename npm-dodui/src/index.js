import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  const style = {
    primary: {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer'
    },

    secondary: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  }

  return (
    <button
      {...props}
      style={
        props.type === 'primary'
          ? style.primary
          : props.type === 'secondary'
          ? style.secondary
          : null
      }
    >
      {props.text}
    </button>
  )
}
