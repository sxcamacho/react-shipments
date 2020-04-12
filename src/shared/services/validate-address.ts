import axios from 'axios';

const baseApiUrl: string = 'https://untitled-z3ss97l7uz1v.runkit.sh';
const validateEndpoint: string = 'validate';

export const validateAddress = (address: string) => {
  return axios.post(`${baseApiUrl}/${validateEndpoint}`, {
    address
  });
}