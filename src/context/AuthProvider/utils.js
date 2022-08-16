import { LoginURL } from "../../services/apis";

export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function geUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email, senha) {
  try {
    const request = await LoginURL.post("login", { email, senha });

    return request.data;
  } catch (error) {
    return null;
  }
}
