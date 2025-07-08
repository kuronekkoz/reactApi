import axios from './custom-axios';


const fetchAllUser= () => {
return axios.get('/api/users?page=1', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    
}
export { fetchAllUser };