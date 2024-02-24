import React from 'react'
import styles from "../AppStyle.module.css";

function Inline() {

    const heading={
        color:'red',
        backgroundColor:'grey',
        fontSize:'90px'
    }
  return (
    <div>
        {/* css module can only apply for one component */}
      <h1 className={styles.header}> Styling react components with Module css</h1>
      <h1 style={heading}>Styling react components with Inline css</h1>
    </div>
  )
}

export default Inline
