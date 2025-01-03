"use server";
import axios from "axios";
import { cookies } from "next/headers";

export const member = async () => {
  try {
    const cookieStore = cookies();
    const accessToken = (await cookieStore).get("access")?.value;

    if (!accessToken) {
      throw new Error("어세스토큰 없다");
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/member`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
