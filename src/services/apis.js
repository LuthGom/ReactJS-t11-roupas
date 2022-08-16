import axios from "axios";

export const produtosUrl = (categoria) =>
  `https://api-loja-t11.herokuapp.com/produtos${categoria}`;

export const LoginURL = axios.create({
  baseURL: "https://restaurant-client-api.herokuapp.com/cliente/",
});
