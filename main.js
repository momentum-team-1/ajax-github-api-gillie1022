let body = document.getElementsByTagName("body")[0];
let header = document.createElement("header");
header.classList.add("header");
body.appendChild(header);

let card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);

let theBasics = document.createElement("div");
theBasics.classList.add("theBasics");
card.appendChild(theBasics);
theBasics.innerHTML = `<h2>The Basics</h2>`;

let infoList = document.createElement("ul");
theBasics.appendChild(infoList);

let theStory = document.createElement("div");
theStory.classList.add("theStory");
card.appendChild(theStory);
theStory.innerHTML = `<h2>The Story</h2><p></p>`;

let bio = document.getElementsByTagName("p")[0];

let avatar = document.createElement("div");
avatar.classList.add("avatar");
card.appendChild(avatar);

fetch("https://api.github.com/users/gillie1022")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    header.innerHTML = `<h1>${data.name}</h1>`;
    infoList.innerHTML = `
    <li>Name: ${data.name}</li>
    <li>GitHub URL: <a href=${data.html_url} target="_blank">${data.login}</a></li>
    <li>Location: ${data.location}</li>`;
    bio.textContent = `${data.bio}`;
    avatar.innerHTML = `<img src=${data.avatar_url} alt="avatar">`;
  });
// <li>email: ${data.email}</li>
