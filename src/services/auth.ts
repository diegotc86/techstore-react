import type { User } from "../types";
import { baseUrl } from "./config";

export async function getUser(token: string) {
  const response = await fetch(`${baseUrl}/usuarios/perfil`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  }
  const user = await response.json();

  return user;
}

export async function login(username: string, password: string) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as User & { token: string };

  return data;
}

export async function signup(
  username: string,
  email: string,
  password: string
) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return errorData.message as string;
  }

  const data = (await response.json()) as User & { token: string };

  return data;
}
