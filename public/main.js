// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domBuilder from '../shared/domBuilder';
import viewTerm from '../pages/viewTerms';

const init = () => {
  domBuilder();
  // viewTerm();

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
