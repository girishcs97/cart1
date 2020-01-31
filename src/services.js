import axios from 'axios';
const secretkey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudF9pZCI6NCwiaWF0IjoxNTc3NjkwNjk4fQ.-zxef68fmjjg3_5GMj5qXBJG7xdKh7KqzNnUxCR8zZo';
const url = 'https://merck-mitc-react-training-2019.herokuapp.com/APIs/';
export const getData =(path,params) =>{
    return axios.get(url + ''+ path,{
        headers:{
            "x-secret-key":secretkey
        },
        params:params
    });
}
export default getData;