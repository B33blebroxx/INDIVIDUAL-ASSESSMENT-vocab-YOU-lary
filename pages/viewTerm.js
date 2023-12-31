import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyTerms = () => {
  const domString = '<h1>No Terms</h1>';
  renderToDom('#view', domString);
};

const viewTerm = (obj) => {
  clearDom();

  const domString = `<div class="card" id="view-term-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Term Description</h6>
    <p class="card-text">${obj.description}</p>
    <h6 class="card-subtitle mb-2 text-body-secondary">Tech</h6>
    <p class="card-text">${obj.tech}</p>
    <h6 class="card-subtitle mb-2 text-body-secondary">Date/Time Submitted</h6>
    <p class="card-text">${obj.timeSubmitted}</p>
        <button type="button" id="delete-term-btn--${obj.firebaseKey}" class="btn btn-outline-danger">Delete</button>
        <button type="button" id="update-term-btn--${obj.firebaseKey}" class="btn btn-outline-primary">Update</button>
  </div>
</div>`;

  renderToDom('#view', domString);
};

export { viewTerm, emptyTerms };
