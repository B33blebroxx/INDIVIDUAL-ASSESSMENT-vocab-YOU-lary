import { getTerms } from '../api/termData';
import logoutButton from '../components/logoutButton';
import { emptyTerms, showTerms } from '../pages/showTerms';
import navBar from '../components/shared/navBar';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  getTerms(user.uid).then((array) => {
    if (array.length) {
      showTerms(array);
    } else {
      emptyTerms();
    }
  });
  domEvents(user);
  formEvents(user);
  logoutButton();
};

export default startApp;
