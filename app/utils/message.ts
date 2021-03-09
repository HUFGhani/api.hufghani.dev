interface Response {
  statusCode: number
  headers: object
  body: string
}

enum StatusCode {
  success = 200,
  failure = 500,
}

export class MessageUtil {
  success(data: object): Response {
    return this.messageBulider(StatusCode.success, 0, 'success', data)
  }

  failure(data: object): Response {
    return this.messageBulider(StatusCode.failure, 1, 'failure', data)
  }

  private messageBulider(
    statusCode: number,
    code: number,
    message: string,
    result: object,
  ): Response {
    return {
      statusCode: statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        code: code,
        message: message,
        data: result,
      }),
    }
  }
}
