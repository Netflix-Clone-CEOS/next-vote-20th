import axios from "axios";

export const teamresult = async () => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/api/vote/team/result`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
