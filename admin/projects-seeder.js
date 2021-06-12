import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const POPULAR_MOVEIS_API = "https://api.themoviedb.org/3/movie/popular?api_key=5efef7a95633dca0907412c3c500e759&language=en-US&page=1";

(async () => {
  // Get projects collection
  let collectionRef = db.collection('popular');

  // Create a Project
  const createProject = (project) => {
    // Add a document via project object
    const data = {
      title:  `${project.title || project.original_title}`,
      id: project.id,
      vote_average: project.vote_average,
      overview: project.overview,
      poster_path: `${project.poster_path || project.backdrop_path}`,
      release_date: project.release_date,
      vote_count: project.vote_count,
      
      ...generateTimestamps()
    };

    collectionRef.doc(uuidv4()).set(data).then(documentReference => {
      console.log(`Added project.`);
    });
  };
    // Create a Project

  // Create projects via promises
  const createProjects = async () => {
    const response = await fetch(`${POPULAR_MOVEIS_API}`);
    const jsonData  =  await response.json();
    const result = jsonData.results;
    console.log(jsonData)
      

    db.collection('counters').doc('popular').set({numAmount:  result.length}, {merge: true});

    const promises = [];
    result.forEach(project => {
      promises.push(createProject(project));
    });
    return await Promise.all(promises);
  };

  await createProjects(); 
})();

// import fetch from 'node-fetch';
// import { v4 as uuidv4 } from 'uuid';
// import MEDIA_API_KEY from './consts.js'
// import { admin, app, db, generateTimestamps } from './firebase';
// import firebase from 'firebase';

// // const GDMGENT_API_CASES = 'https://www.gdm.gent/static/data/cases.json';
// const fetch_trending= https://api.themoviedb.org/3/tv/airing_today?api_key=8aa3a6efa82617beae9311a4b0ef1f76&language=en-US&page=1;



// (async () => {
//   // Get trending collection
//   let collectionRef = db.collection('nowPlayingTv');

//   // Create a Project
//   const createVideo = (video) => {
//     // Add a document via video object
//     const result = {
//       id:video.id,
//       name: ${video.title || video.original_name || video.name},
//       overview: video.overview,
//       thumbnailURL: https://image.tmdb.org/t/p/original/${video.backdrop_path || video.poster_path},
//       ...generateTimestamps()
//     };

//     collectionRef.doc(uuidv4()).set(result).then(documentReference => {
//       console.log(Added video.);
//     });
//   };

//   // Create videos via promises
//   const createVideos = async () => {
//     const response = await fetch(${fetch_trending});
//     const jsonData = await response.json();
//     console.log(jsonData)
//     const result = jsonData.results;

//     db.collection('counters').doc('nowPlayingTv').set({numAmount: result.length}, {merge: true});

//     const promises = [];
//     result.forEach(video => {
//       promises.push(createVideo(video));
//     });
//     return await Promise.all(promises);
//   };

//   await createVideos(); 
// })();