document.getElementById("app").innerHTML = `
<h1>Hello, welcome to my SPA!</h1>
<div>
    Navigate to different pages with the links below.
</div>
<ul>
    <li><a href="#page1">Page 1</a></li>
    <li><a href="#page2">Page 2</a></li>
</ul>
<div id="content"></div>
`;

window.onhashchange = function () {
  let page = window.location.hash;
  let contentElement = document.getElementById("content");

  switch (page) {
    case "#page1":
      contentElement.innerHTML = "<h2>This is Page 1</h2>";
      break;
    case "#page2":
      contentElement.innerHTML = "<h2>This is Page 2</h2>";
      break;
    default:
      contentElement.innerHTML =
        "<h2>Welcome! Click on the links to navigate.</h2>";
      break;
  }
};

// Trigger the event (useful on page load).
window.onhashchange();
