import { Row } from 'react-bootstrap';
import './App.scss'
import Header from './components/Header'
import TableUsers from './components/TableUsers'
import  Container  from 'react-bootstrap/Container';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {

 
  return (
    <>

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

      
      </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover

/>
    </>
  )
}

export default App
