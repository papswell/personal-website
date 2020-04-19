function TypeWritter(content, onChange, options = {}) {
  const speed = options.speed || 10;
  let displayed = "";

  function next() {
    displayed += content[displayed.length];

    onChange(displayed);
  }

  this.run = async function run() {
    await new Promise((resolve) => {
      const wait = speed / 2 + Math.floor((speed / 2) * Math.random());
      setTimeout(() => {
        next();
        return resolve();
      }, wait);
    });

    if (!this.isOver()) {
      return this.run();
    }

    return Promise.resolve();
  };

  this.isOver = function isOver() {
    return displayed.length === content.length;
  };
}

export default TypeWritter;
