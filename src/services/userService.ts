import axios from 'axios';

import type { Msg } from '../models/Msg';

function sendMail(msg: Msg) {
  return axios.post<Msg>('http://localhost:3100/contact', msg);
}

export { sendMail };
