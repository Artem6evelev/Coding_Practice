//! Sync code example
//? Javascript will read your code line by line
// function otherFunct() {
//   console.log("We are in another function");
//   console.log("do some stuff");
// }

// console.log("Start");

// otherFunct();

// console.log("End");

//! Async code example
// console.log("Start");

// setTimeout(() => {
//   // any code we will write here will be async
//   console.log("We are in the timeout");
// }, 5000);

// console.log("End");

//? Async code simulation:
// we can't run sync code here, because we don't have a data, so we can pass a callback function

// console.log("Start");

// function loginUser(email, password, onSucess, onFailure) {
//   // if (onFailure) {

//   // }
//   setTimeout(() => {
//     console.log("Now we have the data");
//     onSucess({ userEmail: email });
//   }, 5000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 1000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   }, 1000);
// }

// const user = loginUser("artem6evelev@goomail.com", 123456, (user) => {
//   console.log(user); // { userEmail: 'artem6evelev@goomail.com' }
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos); // [ 'video1', 'video2', 'video3' ]
//   });
//   videoDetails(videos[0], (title) => {
//     console.log(title);
//   });
// });

// // console.log(user); // undefined - because the information didn't come back yet, when we console log user

// console.log("End");

//! Promise
// //? creation of a promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     // resolve({ user: "ed" });
//     reject(new Error("User not logged in"));
//   }, 2000);
// });
// // execute promise
// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err.message));

// //? Refactor our code:
// console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 1000);
  });
}

// // const user = loginUser("artem6evelev@goomail.com", 123456, (user) => {
// //   console.log(user); // { userEmail: 'artem6evelev@goomail.com' }
// //   getUserVideos(user.userEmail, (videos) => {
// //     console.log(videos); // [ 'video1', 'video2', 'video3' ]
// //   });
// //   videoDetails(videos[0], (title) => {
// //     console.log(title);
// //   });
// // });

// loginUser("ed", "bumba")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));
// console.log("Finish");

// //! If we want to get all the data at the same time?
// const youtube = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from youtube");
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 2000);
// });
// const facebook = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from facebook");
//     resolve({ user: "Name" });
//   }, 5000); // it will resolve after 5 sec.
// });

// Promise.all([youtube, facebook]).then((result) => console.log(result));

//! Async await
// loginUser("ed", "bumba")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// refactor it, to make it look moer like sync code
async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("We could nt get the videos");
  }
}

displayUser();
