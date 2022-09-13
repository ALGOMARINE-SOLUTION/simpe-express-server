import { Response } from 'express';
import { logger } from '../Helper/logging.log4js';

class Handling {
  sendSuccessResponse (res: Response, data?: Record<string, unknown>) {
    return res.status(200).json({
      status: 'SUCCESS',
      message: 'SUCCESS',
      ...data
    });
  }

  // eslint-disable-next-line max-lines-per-function
  sendErrorResponse (res: Response, functionName: string, type?: string) {
    const errorDate = new Date();
    console.log(functionName + ' ' + errorDate.toLocaleDateString() + ' ' + errorDate.toLocaleTimeString() + ': ' + type);
    console.log(type);

    // all error messages and its status that will be sent to user
    if(type !== undefined && RegExp(/(MISSING_DATA)/).test(type)) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'MISSING_DATA'
      });
    } else if(type !== undefined && RegExp(/(NOT_AUTHORIZED)/).test(type)) {
      return res.status(401).json({
        status: 'FAILED',
        message: 'NOT_AUTHORIZED'
      });
    } else if(type !== undefined && RegExp(/(NOT_FOUND)/).test(type)) {
      return res.status(404).json({
        status: 'FAILED',
        message: 'NOT_FOUND'
      });
    } else if(type !== undefined && RegExp(/(INVALID_EMAIL\/PASSWORD)/).test(type)) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'INVALID_EMAIL/PASSWORD'
      });
    } else if(type !== undefined && RegExp(/(INVALID_KEY)/).test(type)) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'INVALID_KEY'
      });
    } else if(type !== undefined && RegExp(/(NOT_VERIFIED)/).test(type)) {
      return res.status(403).json({
        status: 'FAILED',
        message: 'NOT_VERIFIED'
      });
    } else if(type !== undefined && RegExp(/(QRCODE_EXPIRED)/).test(type)) {
      return res.status(404).json({
        status: 'FAILED',
        message: 'QRCODE_EXPIRED'
      });
    } else if(type !== undefined && RegExp(/(WRONG_QRCODE)/).test(type)) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'WRONG_QRCODE'
      });
    } else if(type !== undefined && RegExp(/(WRONG_CAPTCHA)/).test(type)) {
      return res.status(404).json({
        status: 'FAILED',
        message: 'WRONG_CAPTCHA'
      });
    } else if(type !== undefined && RegExp(/(USER_ALREADY_PRESENT)/).test(type)) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'USER_ALREADY_PRESENT'
      });
    } else {
      logger.debug(functionName + ' ' + errorDate.toLocaleDateString() + ' ' + errorDate.toLocaleTimeString() + ': ' + type);
      logger.debug(type);
      return res.status(500).json({
        status: 'FAILED',
        message: 'INTERNAL_ERROR'
      });
    }
  }
}

export const handling: Handling = new Handling();