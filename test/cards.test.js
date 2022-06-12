const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const cardsFactory = require('./factories/cards');
const app = require('../server');

const Card = require('../config/database').Card;
const endpoint = 'http://localhost:3000';

describe('Cards test cases', () => {
    describe('Add or save new card', () => {
        let server = null;
        // before test we empty the database
        before(() => {
            Card.destroy({ where: {}, truncate: true });
            server = app.listen(3000, () => { console.log(`Server started listening on 3000 for test cases`); });
        });
        after(() => {
            Card.destroy({ where: {}, truncate: true });
            server.close();
        });
        it('Should create new card', (done) => {
            chai.request(endpoint).post('/api/v1/cards/').send(cardsFactory.request).then((res) => {
                res.should.have.status(200);
                res.body.should.have.property('error').eql(false);
                res.body.should.have.property('message').eql('Card saved successfully');
                res.body.should.have.property('data').eql({});

                done();
            }).catch((err) => { done(err); });
        });
    });
});
