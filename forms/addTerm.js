import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addTermForm = (uid, obj = {}) => {
  clearDom();
  const domString = `<div class="mb-3">
  <label for="term-title" class="form-label">Term Title</label>
  <input type="text" class="form-control" id="term-title" placeholder="Your Term Here" value="${obj.title}" required>
</div>
<div class="mb-3">
  <label for="term-description" class="form-label">Term Description</label>
  <textarea class="form-control" id="term-description" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit Term
</button>`;

  renderToDom('#form-container', domString);
};

export default addTermForm;
