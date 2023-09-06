import getTerms from '../api/termData';
import logoutButton from '../components/logoutButton';
import { emptyTerms, showTerms } from '../pages/showTerms';
import navBar from '../components/shared/navBar';
import domBuilder from '../components/shared/domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();

  console.warn(user);
  getTerms(user.uid).then((array) => {
    if (array.length) {
      showTerms(array);
    } else {
      emptyTerms();
    }
  });
};

export default startApp;
