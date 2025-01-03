import axios from "axios";

export const teamlist = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/vote/team`
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
