(async () => {
  fetch("https://example.com")
    .then(response => response.text())
    .then(text => console.log(text))
  
  console.log("Hello, Chrome extension with Webpack and TypeScript !!!!!")

  chrome.storage.sync.get("fruit").then(value => console.log(value))
})()
