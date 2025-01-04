"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const leadvote = async ({ memberId }: { memberId: number }) => {
  try {
    const cookieStore = cookies();
    const accessToken = (await cookieStore).get("access")?.value;

    if (!accessToken) {
      console.log("어세스토큰 없다");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/vote/developer/${memberId}`,
      {},
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
