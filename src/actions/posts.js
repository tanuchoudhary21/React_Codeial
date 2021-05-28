import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      },
    };
    fetch(url , options)
      .then((response) => {
        return response.json();  
      })
      .then((data) => {
        console.log(data.data.posts);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}



// import { UPDATE_POSTS } from './actionTypes';

// export function fetchPosts() {
//   return (dispatch) => {
//     const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
//     console.log("Before fetching");
//     fetch(url)
//       .then((response) => {
//         console.log("After fetching");
//         if (response.status !== 200) {
//             throw new Error("Not 200 response")
//            } else return (response.json());
//         // return response.json();
//         console.log('Done')
//       })
//       .then((data) => {
//         console.log('Data', data);
//         dispatch(updatePosts(data.data.posts));
//       }).catch(err => { console.log('Error' , err); });
//   };
// }

// export function updatePosts(posts) {
//     return {
//         type: UPDATE_POSTS,
//         posts
//     }
// }