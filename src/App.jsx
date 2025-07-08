import { Row } from 'react-bootstrap';
import './App.scss'
import Header from './components/Header'
import TableUsers from './components/TableUsers'
import  Container  from 'react-bootstrap/Container';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';

function App() {

  const [isShowModalAddNew, setIsShowModelAddNew]= useState(false);
  const handleClose = () =>{
    setIsShowModelAddNew(false);
  }
  return (
    
      <div className='app-container'>
       <Header/>
      <Container>
      <div className='my-3 add-new'>
        <span>
          <b>
            List user :
          </b>
        </span>
        
        <button className='btn btn-primary' onClick={() => setIsShowModelAddNew(true)}>Add new user </button>
      </div>
       <TableUsers/>

      
      </Container>

      <ModalAddNew 
        show={isShowModalAddNew}
        handleClose={handleClose}
      />
      </div>
    
  )
}

export default App
