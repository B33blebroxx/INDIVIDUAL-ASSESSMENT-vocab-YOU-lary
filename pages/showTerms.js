import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyTerms = () => {
  const domString = '<h1> No Terms </h1>';
  renderToDom('#view', domString);
};

const showTerms = (array) => {
  clearDom();

  let domString = '';
  if (array.length < 1) {
    domString += ' <p> No Terms Found </p>';
  } else {
    array.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Term Description</h6>
        <p class="card-text">${item.description}</p>
        <h6 class="card-subtitle mb-2 text-body-secondary">Tech</h6>
        <p class="card-text">${item.tech}</p>
        <h6 class="card-subtitle mb-2 text-body-secondary">Date/Time Submitted</h6>
        <p class="card-text">${item.timeSubmitted}</p>
        <button type="button" id="view-term-btn--${item.firebaseKey}" class="btn btn-outline-dark">View</button>
        <button type="button" id="delete-term-btn--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
        <button type="button" id="update-term-btn--${item.firebaseKey}" class="btn btn-outline-primary">Update</button>
      </div>
    </div>`;
    });
  }
  renderToDom('#view', domString);
};

export { showTerms, emptyTerms };
