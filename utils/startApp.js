import getTerms from '../api/termData';
import domBuilder from '../shared/domBuilder';
import logoutButton from '../components/logoutButton';
import { emptyTerms, showTerms } from '../pages/showTerms';
// import clearDom from './clearDom';

const startApp = (user) => {
  domBuilder();
  logoutButton();

  getTerms(user.uid).then((array) => {
    if (array.length) {
      showTerms(array);
    } else {
      emptyTerms();
    }
  });
};

export default startApp();
