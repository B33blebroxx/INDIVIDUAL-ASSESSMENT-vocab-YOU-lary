const renderToDom = (divId, content) => {
  const targetDiv = document.querySelector(divId);
  targetDiv.innerHTML = content;
};

export default renderToDom;
