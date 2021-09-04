/* eslint-disable no-param-reassign */
import axios from 'axios';

// const createEndpoint = (api = true) => {
//   const envUrl = process.env.REACT_APP_ENDPOINT_SENSORIAMENTO;
//   const baseUrl = envUrl || 'http://localhost:8080';
//   const isApi = baseUrl.substr(-3) === 'api';

//   if (api && !isApi) return `${baseUrl}/api`;
//   if (!api && isApi) return baseUrl.substring(0, baseUrl.length - 4);

//   return baseUrl;
// };

// export const URI_API = createEndpoint();
// export const URL_LOGIN = `${createEndpoint(
//   true
// )}/sensoriamento-mobile-admin-backend/login`;

// const URL_BASE = `${URI_API}/sensoriamento-mobile-admin-backend`;

// export const URI_PODCASTS = `${URL_BASE}/podcasts`;
// export const URL_CATEGORIAS = `${URL_BASE}/categorias`;
// export const URL_ACESSOS = `${URL_BASE}/login-sensoriamento`;
// export const URL_CPFS = `${URL_BASE}/glebasImagemNaoGeo`;
// export const URL_EVENTOS = `${URL_BASE}/eventos`;
// export const URL_VIDEOS = `${URL_BASE}/videos`;
// export const URL_ASSISTENCIAS = `${URL_BASE}/assistencias`;
// export const URL_ASSISTENCIAS_ALTERAR_EMAIL = `${URL_BASE}/assistencias/alterar-email`;

// export const IS_PROD = !(
//   URI_API.includes('localhost') ||
//   URI_API.includes('dev') ||
//   URI_API.includes('hml')
// );
// export const IS_DEV = URI_API.includes('localhost') || URI_API.includes('dev');
// export const IS_HML = URI_API.includes('hml');

// export const URL_SENSORIAMENTO = `https://sensoriamento-${
//   IS_DEV ? 'bb.dev-' : IS_HML ? 'frontend.hml-' : 'bb.'
// }cld.brasilseg.com.br`;

const axiosConfig = axios.create({});

axiosConfig.defaults.headers.post['Content-Type'] = 'application/json';

// const statusMessage = (code) => {
//   switch (code) {
//     case 400:
//       return 'Ops! Falha ao carregar a página. Tente novamente mais tarde.';
//     case 401:
//       return 'Ops! Você não tem permissão para seguir com esse acesso. Entre em contato com seu Gerente de Relacionamento. ';
//     case 403:
//       return 'Ops! Você não tem permissão para seguir com esse acesso. Entre em contato com seu Gerente de Relacionamento.';
//     case 404:
//       return 'Ops! Falha ao carregar a página. Tente novamente mais tarde.';
//     case 500:
//       return 'Ops! O Serviço está temporariamente Indisponível. Tente novamente mais tarde.';
//     case 504:
//       return 'Ops! O Serviço está temporariamente Indisponível. Tente novamente mais tarde.';
//     default:
//       return 'Ops! O Serviço está temporariamente Indisponível. Tente novamente mais tarde.';
//   }
// };

// const configHandler = (config) => {
//   if (isSession()) {
//     const nmIdSessao = getSession();
//     config.headers = nmIdSessao;
//   } else {
//     if (IS_DEV) {
//       const tokenFixoDev =
//         'eyKicGciNhKIUzH0OiJ9/dxJqdFjhOiIyLEEwMU@xMTU1OBIsIlmidCI7LUU5Nkb1NDcyLhwiaYO{Ijoh`IR0cIL7Ly9uc3JpbFTtZGV3MVNsZB4hcmF{`VxzZVbtY29uMlJyIhvhY29ocll0b{qocm90bIMiOmrhR19CSD1JTmOGTlNQTjlBTTWNVE9gSDVWIm1rInV{[YJuYV0mIjohPTNFU0OQX1NGUmNPUjmCTUVNWD9fQTSOSU4hgP.X4^e7aLDbP8gpLW547m94db0Ft21HP7wtvlkAE0Leec';
//       config.headers.common.Authorization = tokenFixoDev;
//       api.defaults.headers.common.Authorization = tokenFixoDev;
//     } else if (IS_HML) {
//       const tokenFixoHml =
//         'eyKicGciNhKIUzH0OiJ9/dxJqdFjhOiIyLEEwMU@xMTU1OBIsIlmidCI7LUU5N{D3Mzc0LRwiaYO{Ijoh`IR0cIL7Ly9uc3JpbFTtZGV3MVNsZB4hcmF{`VxzZVbtY29uMlJyIhvhY29ocll0b{qocm90bIMiOmrhR19CSD1JTmOGTlNQTjlBTTWNVE9gRD1MIm1rInV{[YJuYV0mIjohPTNFU0OQX1NGUmNPUjmCTUVNWD9fQTSOSU4hgP.n-JRQ5TEs@V6hq2qPCB86MNXTF`8HXZh2JuhpCtenow';
//       config.headers.common.Authorization = tokenFixoHml;
//       api.defaults.headers.common.Authorization = tokenFixoHml;
//     } else if (IS_PROD) {
//       const tokenFixoProd =
//         'eyKicGciNhKIUzH0OiJ9/dxJqdFjhOiIyLEEwMU@xMTU1OBIsIlmidCI7LUU5N{D3Mzc4LhwiaYO{Ijoh`IR0cIL7Ly9uc3JpbFTtZGV3MVNsZB4hcmF{`VxzZVbtY29uMlJyIhvhY29ocll0b{qocm90bIMiOmrhR19CSD1JTmOGTlNQTjlBTTWNVE9gTGJEIm1rInV{[YJuYV0mIjohPTNFU0OQX1NGUmNPUjmCTUVNWD9fQTSOSU4hgP.cnfhtgAdO@pAvaEI4ItRWxeCN5Lo0fHoCwLCdC^{sGk';
//       config.headers.common.Authorization = tokenFixoProd;
//       axiosConfig.defaults.headers.common.Authorization = tokenFixoProd;
//     }
//   }
//   config.crossdomain = true;
//   return config;
// };

// const errorHandler = (error) => {
//   const { response } = error || {};
//   const { status } = response || {};

// //   if (status === 403) {
// //     removeSession();
// //     window.location.pathname = '/login';
// //   }
// //   console.error(statusMessage(status));
//   return Promise.reject(error);
// };

// axiosConfig.interceptors.request.use(
//   (config) => configHandler(config),
// //   (error) => errorHandler(error)
// );

// axiosConfig.interceptors.response.use(
//   (response) => response,
//   (error) => errorHandler(error)
// );

export default axiosConfig;
