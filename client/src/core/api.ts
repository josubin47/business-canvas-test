import axios, {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

const BASE_URL = 'http://localhost:5000';
const BASE_PATH = `/image`;

const client = axios.create({
  baseURL: BASE_URL,
});

const reqURL = (param?: unknown) => {
  return param ? `${BASE_PATH}/${param}` : BASE_PATH;
};

interface RequestProps {
  method: Method;
  pathVariable?: unknown;
  bodyData?: unknown;
}

async function request({ method, pathVariable, bodyData }: RequestProps) {
  let response: AxiosResponse<any, any>;

  try {
    const axiosConfig: AxiosRequestConfig = {
      url: reqURL(pathVariable),
      method: method as Method,
      data: bodyData,
      responseType: method === 'get' ? 'blob' : 'json',
    };

    response = await client.request(axiosConfig);
    return response;
  } catch (axiosError) {
    console.log(axiosError);
  }
}

const api = {
  getImage(filename: string) {
    return request({ method: 'get', pathVariable: filename });
  },
  uploadImage(bodyData: FormData) {
    return request({ method: 'post', bodyData });
  },
};

export default api;
