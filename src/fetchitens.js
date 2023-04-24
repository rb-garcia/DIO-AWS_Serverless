"use strict";
const AWS = require("aws-sdk");

const fetchitens = async (event) => {
  //module.exports.fetchItens = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let Itens;

    try {
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();

        itens = results.Itens;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(Itens),
    };
};

module.exports = {
    handler: fetchitens,
};