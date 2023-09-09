import { createTerm, getTerms, updateTerm } from '../api/termData';
import { showTerms } from '../pages/showTerms';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-term')) {
      const capturedDate = Date(e);
      const sqlDate = new Date(capturedDate).toISOString().slice(0, 19).replace('T', ' ');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        timeSubmitted: sqlDate,
        uid: user.uid,
        tech: document.querySelector('#term-tech').value
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getTerms(user.uid).then(showTerms);
        });
      });
    }

    if (e.target.id.includes('update-term')) {
      const capturedDate = Date(e);
      const sqlDate = new Date(capturedDate).toISOString().slice(0, 19).replace('T', ' ');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        timeSubmitted: sqlDate,
        uid: user.uid,
        tech: document.querySelector('#term-tech').value,
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getTerms(user.uid).then(showTerms);
      });
    }
  });
};

export default formEvents;
