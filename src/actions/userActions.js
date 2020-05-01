import { LOGIN, LOGOUT, REGISTER,SET_USER } from './types';
import axios from 'axios'


export function login(userDetails) {
  
        
      return function (dispatch) {
          
          //async function fetchData() {
             /*  setPosts(
                await */
        fetch('http://192.168.86.58/portalapi/public/api/login', {
          method: 'POST',
            headers: {
            'accept':'application/json',
            'content-type': 'application/json',
             },
          body: JSON.stringify(userDetails)
    
        })
            .then(res => res.json())
            .then(userDetails => {
                console.log(userDetails.message)
                if (userDetails.message) {
                    dispatch({
                        type: LOGIN,
                        payload: userDetails,
                        loggedin: false
                        //write to local storage
                    })
                }
            
           else
                {

                    //write to local
                    localStorage.setItem('access_token', userDetails.access_token);
                    //localStorage.setItem('user',JSON.stringify(userDetails.user))

                    dispatch({
                        type: LOGIN,
                        payload: userDetails,
                        loggedin: true
                        //write to local storage
                    }) 
                    
                }
            })
        //  .then(data => console.log(data));
              // .then(   res => res.data)
                //.catch(err => console.log(err,'fetch warning'))
              /* )
            } */
    
      }
}
    



export function logout() {
    console.log('logout789') 
    localStorage.removeItem('access_token');
    return function (dispatch) {
        dispatch({
            type: LOGOUT,
            loggedin: false
            //delete from local storage
        })
        };
        //async function fetchData() {
           /*  setPosts(
              await */
      /* fetch('http://192.168.86.51/portalapi/public/api/login', {
        method: 'POST',
          headers: {
          'accept':'application/json',
          'content-type': 'application/json',
           },
        body: JSON.stringify(userDetails)
  
      })
          .then(res => res.json())
          .then(userDetails => dispatch({
              type: LOGOUT,
              loggedin:false
          }))
      //  .then(data => console.log(data));
            // .then(   res => res.data)
              //.catch(err => console.log(err,'fetch warning'))
            /* )
          } )*/
  
    
}
  



export function register(userDetails) {
  
    console.log(userDetails)
    return function (dispatch) {
        
        //async function fetchData() {
           /*  setPosts(
              await */
      fetch('http://192.168.86.58/portalapi/public/api/register', {
        method: 'POST',
          headers: {
          'accept':'application/json',
          'content-type': 'application/json',
           },
        body: JSON.stringify(userDetails)
  
      })
          .then(res => res.json())
          .then(userDetails => {

              if (userDetails.message) {

                  dispatch({
                      type: REGISTER,
                      payload: userDetails,
                      registered: false
                      //write to local storage
                  })
              }

              else {
                dispatch({
                    type: REGISTER,
                    payload: userDetails,
                    registered: true,
                    loggedin:true
                    //write to local storage
                })
                  
              }
          })
      //  .then(data => console.log(data));
            // .then(   res => res.data)
              //.catch(err => console.log(err,'fetch warning'))
            /* )
          } */
  
    }
}
  
export function setuser(token) {
  
    token='Bearer '+token
    console.log(token)
    return function (dispatch) {
        
        //async function fetchData() {
           /*  setPosts(
              await */
      fetch('http://192.168.86.58/portalapi/public/api/profile', {
        method: 'GET',
          headers: {
          'accept':'application/json',
           'content-type': 'application/json',
          'Authorization' : token,
           },
       // body: JSON.stringify(userDetails)
  
      })
          .then(res => res.json())
          .then(userDetails => {

              if (userDetails.message) {

                  dispatch({
                      type: REGISTER,
                      payload: userDetails,
                      registered: false
                      //write to local storage
                  })
              }

              else {
                dispatch({
                    type: SET_USER,
                    payload: userDetails,
                    registered: true,
                    loggedin:true
                    //write to local storage
                })
                  
              }
          })
      //  .then(data => console.log(data));
            // .then(   res => res.data)
              //.catch(err => console.log(err,'fetch warning'))
            /* )
          } */
  
    }
}
  

