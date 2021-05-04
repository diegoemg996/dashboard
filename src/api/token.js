import apiDB from './apiDB'

export const tokenAuth = token =>{
    if(token){
        apiDB.defaults.headers.common['x-token'] = token;
    }else{
        delete apiDB.defaults.headers.common['x-token'];
    }
}