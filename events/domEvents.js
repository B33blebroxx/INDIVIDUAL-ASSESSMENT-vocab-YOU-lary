import addTermForm from '../forms/addTerm';
import { getSingleTerm, deleteTerm, getTerms } from '../api/termData';
import { viewTerm } from '../pages/viewTerm';
import { emptyTerms, showTerms } from '../pages/showTerms';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term')) {
      addTermForm(user.uid);
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termObj) => addTermForm(user.uid, termObj));
    }

    if (e.target.id.includes('view-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then(viewTerm);
    }

    if (e.target.id.includes('delete-term-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteTerm(firebaseKey).then(() => {
          getTerms(user.uid).then((array) => {
            if (array.length) {
              showTerms(array);
            } else {
              emptyTerms();
            }
          });
        });
      }
    }
  });
};

export default domEvents;
