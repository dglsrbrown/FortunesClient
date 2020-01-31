let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:4000';
    break;
  case 'drb-blueproject-client.herokuapp.com':
    APIURL = ' https://drb-fortunesproject-server.herokuapp.com';
}

export default APIURL;
