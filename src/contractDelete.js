const { dynamodb } = require('./const/providers');
const { sendResponse } = require('./utils/sendResponse');

module.exports.contractDelete = async (event) => {
    const { idContract } = JSON.parse(event.body);

    try {
        await dynamodb.delete({
            TableName: 'contractsTable',
            Key: {
                idContract: idContract
            }
        }).promise();

        return sendResponse(200, 'Deleted contract successfully!');
    } catch (error) {
        return sendResponse(400, error);
    }
}