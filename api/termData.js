import client from '../utils/client';

const endpoint = client.databaseURL;

const getTerms = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchTerms = (searchValue, uid) => new Promise((resolve, reject) => {
  getTerms(uid).then((termsArray) => {
    const searchResults = termsArray.filter((term) => (
      term.title.toLowerCase().includes(searchValue)
      || term.description.toLowerCase().includes(searchValue)
    ));

    resolve(searchResults);
  }).catch(reject);
});

const filterCSS = (tech) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/.json?orderBy="tech"&equalTo"${tech}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.tech === 'CSS');
      resolve(filteredTerms);
    }).catch(reject);
});

const filterHTML = (tech) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/.json?orderBy="tech"&equalTo"${tech}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.tech === 'HTML');
      resolve(filteredTerms);
    }).catch(reject);
});

const filterReact = (tech) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/.json?orderBy="tech"&equalTo"${tech}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.tech === 'React');
      resolve(filteredTerms);
    }).catch(reject);
});

const filterJS = (tech) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/.json?orderBy="tech"&equalTo"${tech}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.tech === 'JavaScript');
      resolve(filteredTerms);
    }).catch(reject);
});

export {
  getSingleTerm,
  getTerms,
  createTerm,
  updateTerm,
  deleteTerm,
  searchTerms,
  filterCSS,
  filterHTML,
  filterReact,
  filterJS
};
