import axios from "axios";

export const nomilist = async ( type: string ) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/vote/developer`,
      {
        params: { type },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
