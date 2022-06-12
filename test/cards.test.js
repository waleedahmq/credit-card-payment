const request = require('supertest');
const chai = require('chai');

const cardsFactory = require('./factories/cards');
const app = require('../server');

describe('Cards test cases', function () {
    describe('Add or save new card', function () {
        it('Should create new card', function (done) {
            request(app).post('/api/v1/cards').send(cardsFactory.request).end(function (err, res) {
                if (err) return done(err);
                chai.expect(res.statusCode).to.equal(200);
                chai.expect(res.error).to.equal(false);
                chai.expect(res.message).to.equal('Card saved successfully');
                chai.expect(res.data).to.equal({});

                done();
            });
        });
    });
});
