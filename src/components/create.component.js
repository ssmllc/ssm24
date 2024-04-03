const CreateComponent = ({ elementType = 'div', className = undefined, dataSet = {}, textContent = '' }) => {

  const element = document.createElement(elementType);

  if (Array.isArray(className)) {
    className.length ? element.classList.add(...className) : null;
  } else {
    className ? element.classList.add(className) : null;
  }

  if (Object.keys(dataSet).length !== 0) {
    const { attribute, value } = { ...dataSet };
    element.setAttribute(attribute, value);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

export default CreateComponent;