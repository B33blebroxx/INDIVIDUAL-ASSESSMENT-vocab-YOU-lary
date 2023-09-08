import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addTermForm = (uid, obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}" class="mb-4">
  <label for="term-title" class="form-label">Term Title</label>
  <input type="text" placeholder="Your Term" class="form-control" id="title" value="${obj.title || ''}" required>
<div class="mb-3">
  <label for="term-description" class="form-label">Term Description</label>
  <textarea class="form-control" id="description" rows="3" placeholder="Term Description" value="${obj.description}" || ''></textarea>
</div>
<select id="term-tech" class="form-select" Aria-label="Term Tech">
<option selected disabled>${obj.tech || 'Select Tech Type'}</option>
<option value="${obj.tech || 'JavaScript'}">JavaScript</option>
<option value="${obj.tech || 'CSS'}">CSS</option>
<option value="${obj.tech || 'HTML'}">HTML</option>
<option value="${obj.tech || 'React'}">React</option>
</select>
<button type="submit" id="submit-term" class="btn btn-primary">Submit Term
</button>
</form>`;

  renderToDom('#form-container', domString);
};

export default addTermForm;
