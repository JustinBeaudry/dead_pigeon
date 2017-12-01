'use strict';

import moment from 'moment';

export default class Message {
  constructor(to, from, message, timestamp) {
    this.to = to;
    this.from = from;
    this.message = message;
    this.timestamp = timestamp || moment.now();
  }
}