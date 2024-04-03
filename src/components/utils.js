export const getElement = (elementId, parent = undefined) => {
  if (parent && elementId) {
    return parent.querySelector(elementId);
  }

  return elementId && document.querySelector(elementId);
}

export const getAllElements = (elementId, parent = undefined) => {
  if (parent && elementId) {
    return [].slice.call(parent.querySelectorAll(elementId));
  }

  return elementId && [].slice.call(document.querySelectorAll(elementId));
}