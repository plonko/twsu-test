import request from 'superagent/lib/client';

export default {
  getResults: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, response) => {
          if (err) reject(err);
          console.log(JSON.parse(response.text))
          resolve(JSON.parse(response.text));
        })
    });
  }
}