import axios from "axios";
import { GetPhotoDTO } from "../types/photo";

const baseURL = "https://api.unsplash.com/";

export const PhotoAPI = {
  getRandomPhotos: async ({
    page,
    count,
  }: {
    page: number;
    count: number;
  }): Promise<GetPhotoDTO[]> => {
    const { data, status } = await axios.get(
      `${baseURL}/photos/random?client_id=${
        import.meta.env.VITE_UPSPLASH_ACC_KEY
      }&count=${count}&page=${page}`
    );

    if (status === 403) {
      throw new Error("하루 요청량을 초과하였습니다.");
    } else if (status !== 200) {
      throw new Error("요청에 실패하였습니다.");
    } else {
      return data;
    }
  },
};
