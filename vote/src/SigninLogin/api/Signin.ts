import axios from "axios";

export const signin = async (data: {
  name: string;
  userId: string;
  password: string;
  team: string;
  part: string;
}) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/auth/signup`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
