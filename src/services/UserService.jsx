import axios from './custom-axios';


const fetchAllUser= (page) => {
return axios.get(`/api/users?page=${page}`, )  
}

const postCreateUser = (name, job) => {
    return axios.post(
      "/api/users",
      { name, job }, // Đây là body
      
    );
};
const putUpdateUser = ( name, job) => {
  return axios.put(
     `/api/users`,
    { name, job }, // Đây là body
    
  );
};

export { fetchAllUser, postCreateUser, putUpdateUser};