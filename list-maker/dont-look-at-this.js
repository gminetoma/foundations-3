// Ignore this file! Begone!
window.addEventListener('load', () => {
  document.getElementById('add-button').addEventListener('click', () => {
    addHasBeenPushed();
  });
  document.getElementById('remove-button').addEventListener('click', () => {
    removeHasBeenPushed();
  });

  let list = document.getElementById('list-of-things');
  Array.from(list.childNodes)
    .filter(n => n.tagName !== 'LI')
    .forEach(n => list.removeChild(n));

  let hasProblem = () => {
    let ul = document.getElementById('list-of-things');
    if (!ul) return true;
    let children = ul.childNodes;
    if (!children || typeof children !== 'object') return true;
    for (let i = 0; i < children.length; i++) {
      let li = children[i];
      if (!li || typeof li !== 'object' || li.tagName !== 'LI') return true;
    }
    return false;
  };

  let errorToggle = false;
  let complainAboutNotUsingLiElements = () => {
    let warning = document.getElementById('scary-warning');
    let problem = hasProblem();
    if (errorToggle !== problem) {
      errorToggle = problem;
      if (problem) {
        warning.style.display = 'block';
        warning.innerText = "Your <ul> element should ONLY contain <li> elements.";
      } else {
        warning.style.display = 'none';
      }
    }
  };

  setInterval(complainAboutNotUsingLiElements, 100);
});

const displayError = (err) => {
  throw new Error(["", "*".repeat(50), err, "*".repeat(50)].join("\n"));
};
