import axios from "axios";

export const leaddetail = async ( developerId: number ) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/vote/developer/detail/${developerId}`,
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
