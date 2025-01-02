import axios from "axios";

export const teamvote = async (data: { userId: string; password: string }) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/api/login`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
