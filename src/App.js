import React from 'react'
import Standard from './resume-components/standard/Standard';
import Homepage from './ui-components/CreateResume';
import Formdata from './ui-components/Formdata';
function App() {
  const [name, setName] = React.useState('')
  const ref = React.createRef()

  return (
    <div>
      <div className='d-flex m-10' style={{ margin: "5em 7em" }}>
        <div className=''>
          <Homepage />
        </div>
        <div className=''>
          <Formdata />
        </div>

      </div>

    </div >
  );
}

export default App;
