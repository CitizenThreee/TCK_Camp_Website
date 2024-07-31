import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    console.log(event.body);
    const requestBody = event.body;
  
    const params = {
        TableName: 'tck-camp-registrations',
        Item: {...requestBody}
    };

    try {
        await dynamoDb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item created successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error })
        };
    }
};