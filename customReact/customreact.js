// * Cheap copy of react element as a JS object!
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'Click me to visit google',
  },
};

// * Method to add a specific react component to specified container.
const customRender = (reactElement, container) => {
  // * V1 Code : Add attributes manually one by one.
  /* 
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.props.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);*/

  // * V2 Code : Add attributes using loop.
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.props.children;

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
