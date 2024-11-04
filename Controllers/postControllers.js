const posts = require("../db/posts.js");

const index = (req, res) => {

  let html = '<ul style="list-style-type: none;">';

  posts.forEach((post) => {
    html += `
        <li>
        
            <img src="${post.image}" alt="">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>${post.tags}</p>
    
        </li>
    `;
  });

  html += "</ul>";

  res.status(200).send(html);
};


const show = (req, res) => {
  const post = posts.find((post) => post.slug === req.params.slug);

  if (!post) {
    return res.status(404).json({
      error: `404! Not found`,
    });
  }

  return res.status(200).json({
    data: post,
  });
};

module.exports = {
  index,
  show
};
