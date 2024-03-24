// links
const links = document.querySelectorAll(".left-sidebar a, .nav-menu a");

// current url of the page
let currentURL = simplifyURL(window.location.href);

// set link to active if same as current url
links.forEach((link) => {
  const url = simplifyURL(link.href);

  if (url === currentURL && !link.classList.contains("active")) {
    link.classList.add("active");
  } else if (url != currentURL && link.classList.contains("active")) {
    link.classList.remove("active");
  }
});

// simplifies the url
function simplifyURL(url) {
  let newURL = url;

  newURL.endsWith("index.html")
    ? (newURL = newURL.replace("index.html", ""))
    : newURL.endsWith(".html") && (newURL = newURL.replace(".html", ""));

  return newURL;
}
