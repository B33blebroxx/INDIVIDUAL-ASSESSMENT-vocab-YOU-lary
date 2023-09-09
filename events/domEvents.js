import addTermForm from '../forms/addTerm';
import { getSingleTerm, deleteTerm } from '../api/termData';
import viewTerm from '../pages/viewTerm';
import { showTerms } from '../pages/showTerms';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term')) {
      addTermForm(user.uid);
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-term-btn')) {
      addTermForm(user.uid);
    }

    if (e.target.id.includes('view-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then(viewTerm);
    }

    if (e.target.id.includes('delete-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteTerm(firebaseKey).then(showTerms);
    }
  });
};

export default domEvents;
