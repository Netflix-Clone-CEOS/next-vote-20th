import axios from "axios";

export const teamlist = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/vote/team`
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
