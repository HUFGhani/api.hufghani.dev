interface Response {
  statusCode: number
  body: string
}

enum StatusCode {
  success = 200,
}

export class MessageUtil {
  success(data: object): Response {
    return this.messageBulider(StatusCode.success, 0, 'success', data)
  }

  private messageBulider(
    statusCode: number,
    code: number,
    message: string,
    result: object,
  ): Response {
    return {
      statusCode: statusCode,
      body: JSON.stringify({
        code: code,
        message: message,
        data: result,
      }),
    }
  }
}
