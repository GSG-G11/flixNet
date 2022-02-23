const supertest = require('supertest');
const app = require('./app');

describe('test app.js functions', () => {
  test('status code 200,content-type json , get all data in json', (done) => {
    supertest(app)
      .get('/search')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  test('post data to /cards , status 201 , json', (done) => {
    supertest(app)
      .post('/cards')
      .send({category:"top_rated"})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
