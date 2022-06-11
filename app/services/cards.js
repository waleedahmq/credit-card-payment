const cardProvider = require('../providers/cards')

const cardService = {
    addCard: async (body) => {
        if (body.card_number) {
            body.card_number = helper.encrypt(body.card_number);
        }
        if (body.card_cvv) {
            body.card_cvv = helper.encrypt(body.card_cvv);
        }
        return await cardProvider.create(body);
    },

    getCards: async () => {
        let cards = await cardProvider.findAll();
        cards = cards.map(card => {
            card = card.toJSON();
            if (card && card.card_number) {
                card.card_number = helper.decrypt(card.card_number);
            }
    
            delete card['card_cvv'];
            delete card['card_expiry_month'];
            delete card['card_expiry_year'];
            return card;
        });

        return cards;
    },

    getCardById: async (id) => {
        let card = await cardProvider.findOne({ id: id });
        card = card.toJSON();
        if (card && card.card_number) {
            card.card_number = helper.decrypt(card.card_number);
        }

        delete card['card_cvv'];
        delete card['card_expiry_month'];
        delete card['card_expiry_year'];

        return card;
    }
};

module.exports = cardService;
