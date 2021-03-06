const container = document.querySelector('#render-space');
const canvas = container.appendChild(createWorld(container));

const context = canvas.getContext('2d');

setupScene(context, randomMoveables(100));

function createWorld(container) {
  const width = document.createAttribute('width');
  width.value = container.offsetWidth;

  const height = document.createAttribute('height');
  height.value = container.offsetHeight;

  const layer = document.createElement('canvas');
  layer.setAttributeNode(width);
  layer.setAttributeNode(height);

  return layer;
}

