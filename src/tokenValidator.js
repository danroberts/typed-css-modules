'use strict';

export class TokenValidator {
  validate(key) {
    if(!key) {
      return {
        isValid: false,
        message: 'empty token'
      };
    }
    return {
      isValid: true
    };
  }
}
