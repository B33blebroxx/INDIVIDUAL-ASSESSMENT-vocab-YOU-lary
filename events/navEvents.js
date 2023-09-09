import {
  filterCSS, filterHTML, filterJS, filterReact, getTerms, searchTerms
} from '../api/termData';
import { emptyTerms, showTerms } from '../pages/showTerms';

const navEvents = (user) => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchTerms(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showTerms(search);
          } else {
            emptyTerms();
          }
        });
      document.querySelector('#search').value = '';
    }
  });

  document.querySelector('#filter-CSS').addEventListener('click', () => {
    filterCSS(user.uid).then(showTerms);
  });

  document.querySelector('#filter-HTML').addEventListener('click', () => {
    filterHTML(user.uid).then(showTerms);
  });

  document.querySelector('#filter-React').addEventListener('click', () => {
    filterReact(user.uid).then(showTerms);
  });

  document.querySelector('#filter-JS').addEventListener('click', () => {
    filterJS(user.uid).then(showTerms);
  });

  document.querySelector('#nav-title').addEventListener('click', () => {
    getTerms(user.uid).then(showTerms);
  });
};

export default navEvents;
