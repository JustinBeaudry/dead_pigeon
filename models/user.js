'use strict';

import {v4} from 'node-uuid';

export default class User {
  constructor() {
    this.id = v4();
  }
}
