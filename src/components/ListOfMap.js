import React from 'react'

function Programming() {

    const Proglanguage=['c++','python','js','java','c++']
  return (
    <div>
      {
        Proglanguage.map((lang,index)=><h1 key={index}> <li>{lang}</li></h1>)

      }
    </div>
  )
}

export default Programming;
