export default () => ({
    server_intern: process.env.SERVER,
    port: 3001 || process.env.PORT
  });
  