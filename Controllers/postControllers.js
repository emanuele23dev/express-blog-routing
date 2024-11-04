const posts = require("../db/posts.js");

const index = (req, res) => {
    
  let html = "<ul>";

  posts.forEach((post) => {
    html += `
        <li>
        
            <img src="${post.imgage}" alt="">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>${post.tags}</p>
    
        </li>
    `;
  });

  html += "</ul>";

  res.status(200).send(html);
};
