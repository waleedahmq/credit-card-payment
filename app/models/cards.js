/**
 * This function is generating a schema that can be used to interact with database
 * @param {sequelize object to define schema for the present connection} sequelize 
 * @param {datatypes object required to assign different datatypes to properties} DataTypes 
 * @returns the card schema to be used in providers to communicate with database
 */
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
