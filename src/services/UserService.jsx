import axios from './custom-axios';


const fetchAllUser= (page) => {
return axios.get(`/api/users?page=${page}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    
}
export { fetchAllUser };