import { searchTerms } from '../api/termData';
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
};

export default navEvents;
