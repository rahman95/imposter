const app = require("./app");

const server = app.listen(app.locals.config.port, () =>
  console.log(`Imposter BE listening on port ${app.locals.config.port}`)
);

const shutDown = () => {
  console.warn("Received kill signal, shutting down gracefully");
  server.close(() => process.exit(0));
};

process.on("uncaughtException", (exception) =>
  console.error({ message: "Uncaught exception", err: exception })
);
process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
