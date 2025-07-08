
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [totalUser, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModalAddNew, setIsShowModelAddNew]= useState(false);
  const handleClose = () =>{
    setIsShowModelAddNew(false);
  }
  
  const handleUpdateTable = (user) => { 
    setListUsers([user, ...listUsers]);
  }

    useEffect(()=>{
        //call api
        //dry
       getUser(1)
    },[])

    const getUser = async(page) =>{
        let res = await fetchAllUser(page);
        console.log(">>>>>>check res:",res);
        if(res && res.data ){
            setTotalUser(res.total)
            setTotalPages(res.total_pages)
            setListUsers(res.data)
        }
    }

 const handlePageClick = (event) =>{
    getUser(+ event.selected + 1)
    }

   
    return(<>
    <div className='my-3 add-new'>
        <span>
          <b>
            List user :
          </b>
        </span>
        
        <button className='btn btn-primary' onClick={() => setIsShowModelAddNew(true)}>Add new user </button>
      </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID </th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
      {listUsers && listUsers.length >0 &&
        listUsers.map((item, index) => {
            return(
                <tr key={`users-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                </tr>
            )
        })
      }
        
       
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
       pageClassName='page-item'
       pageLinkClassName='page-link'
       previousClassName='page-item'
       previousLinkClassName='page-link'
       nextClassName='page-item'
       nextLinkClassName='page-link'
       breakClassName='page-item'
       breakLinkClassName='page-link'
       containerClassName='pagination'
       activeClassName='active'
      />
    <ModalAddNew 
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
    </>)
}
export default TableUsers;