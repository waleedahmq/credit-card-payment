module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('card', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        card_number: DataTypes.TEXT,
        card_cvv: DataTypes.TEXT,
        card_name: DataTypes.TEXT,
        card_expiry_month: DataTypes.TEXT,
        card_expiry_year: DataTypes.TEXT
    });

    return Card;
};
