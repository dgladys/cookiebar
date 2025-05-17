type createHtmlElementProps = {
  nodeType: string;
  className?: string;
  content?: string | null | Node | Node[] | HTMLCollection;
};

const CHEConfDef: createHtmlElementProps = {
  nodeType: 'div',
  className: '',
  content: null,
};

function createHtmlElement(config = CHEConfDef) {
  const { nodeType, className, content } = config;
  const element = document.createElement(nodeType);
  if (className) {
    element.className = className;
  }
  if (typeof content === 'string') {
    element.append(...createHTMLElementsFromText(content));
  } else if (content instanceof Node) {
    element.append(content);
  } else if (content instanceof HTMLCollection || content instanceof Array) {
    element.append(...Array.from(content));
  }
  return element;
}

function createHTMLElementFromText(text: string) {
  const div = document.createElement('div');
  div.innerHTML = text.trim();
  return div.firstChild as Node;
}

function createHTMLElementsFromText(text: string) {
  const div = document.createElement('div');
  div.innerHTML = text.trim();
  return div.childNodes as unknown as Node[];
}

export {
  createHtmlElement,
  createHTMLElementFromText,
  createHTMLElementsFromText,
};
