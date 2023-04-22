const elementsWithClass = document.querySelectorAll('[class]');

const uniqueClassNames = new Set();
elementsWithClass.forEach(element => {
  let current = element.className;
  if (typeof current === "string") {
    const elementClassNames = current.split(' ');
    elementClassNames.forEach(className => uniqueClassNames.add(className));
  }
});

chrome.storage.local.set({classNames: Array.from(uniqueClassNames)});