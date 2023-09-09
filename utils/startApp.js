import { getTerms } from '../api/termData';
import logoutButton from '../components/logoutButton';
import { emptyTerms, showTerms } from '../pages/showTerms';
import navBar from '../components/shared/navBar';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

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
  navEvents(user);
  logoutButton();
};

export default startApp;
