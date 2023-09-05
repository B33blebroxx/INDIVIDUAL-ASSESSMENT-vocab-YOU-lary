import renderToDom from '../utils/renderToDom';

const cardsOnDom = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default cardsOnDom;
