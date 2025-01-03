"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const login = async (data: { userId: string; password: string }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}login`,
      data
    );

    const accessToken = response.headers["authorization"];

    if (accessToken) {
      console.log("Access Token", accessToken);
      (await cookies()).set("access", accessToken);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
