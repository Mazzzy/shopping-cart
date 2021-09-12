// configurable define custom element call
export const defineCustomElement = (tagName, element) => {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, element);
    }
}
// logging redux operation in console
export const storeLogger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}