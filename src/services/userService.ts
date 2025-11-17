import axios from 'axios';

import type { Msg } from '../models/Msg';

function sendMail(msg: Msg) {
  return axios.post<Msg>(import.meta.env.SERVER_MSG, msg);
}

export { sendMail };
