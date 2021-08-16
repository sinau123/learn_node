const http = require("http");

const users = ["Denis", "Max", "Mary"];
/**
 *
 * @param {Object} param0
 * @param {http.IncomingMessage} param0.req
 * @param {http.ServerResponse} param0.res
 * @param {...String} content
 */
function createTemplate({ req, res }, ...content) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Apps</title></head>");
  res.write("<body>");
  res.write(content.join(""));
  res.write("</body>");
  res.write("</html>");
  res.end();
}

/**
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function handleRequest(req, res) {
  const { url, method } = req;
  if (url === "/") {
    const input = `<input name="username" />`;
    const button = `<button type="submit">Save</button>`;
    const form = `<form method="post" action="/create-user">${input}${button}</form>`;
    const link = `<div><a href="/users">User List</a></div>`;
    createTemplate({ req, res }, "<h1>Create User</h1>", form, link);
  } else if (url === "/users") {
    const info = `<div>User list: `;
    const list = `<ul> ${users.map((u) => `<li>${u}</li>`).join("")} </ul>`;
    const link = `<div><a href="/">Create User</a></div>`;
    createTemplate({ req, res }, link, info, list);
  } else if (url === "/create-user") {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const parseBody = Buffer.concat(chunks).toString();
      const name = parseBody.split("=")[1];
      console.log(name);
      users.push(name);
      res.writeHead(302, { Location: "/users" });
      res.end();
    });
  } else {
    res.writeHead(302, { Location: "/" });
    res.end();
  }
}

module.exports = handleRequest;
