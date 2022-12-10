// Custom middleware that logs out the type and path of each request to the server
const middleware = (req, res, next) => {
    const fgRed = '\x1b[31m'
    const fgGreen = '\x1b[32m'
    const fgYellow = '\x1b[33m'
    const fgWhite = "\x1b[37m"
    switch (req.method) {
      case 'GET': {
        console.info(`${fgGreen}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`${fgYellow}${req.method} request to ${req.path}`);
        break;
      }
      case 'DELETE': {
        console.info(`${fgRed}${req.method} request to ${req.path}`)
      }
      default:
        console.log(`${fgWhite}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.middleware = middleware;
  