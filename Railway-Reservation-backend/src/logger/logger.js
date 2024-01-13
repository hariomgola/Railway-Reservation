const serverStartingLogger = (data) => {
  console.clear();
  console.log(`|> Server is up and running at ${data}`);
};

const successRouterLogger = (data) => {
  console.log(`  |> ${data} handler has been called`);
};

const defaultRouterLogger = (data) => {
  console.log(`  |> ${data} handler has been called`);
};

module.exports = {
  serverStartingLogger,
  defaultRouterLogger,
  successRouterLogger,
};
