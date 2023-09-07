import addTermForm from '../forms/addTerm';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term')) {
      addTermForm(user.uid);
    }
  });
};

export default domEvents;
