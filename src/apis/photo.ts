import axios from "axios";
import { GetPhotoDTO } from "../types/photo";

const baseURL = "https://api.unsplash.com/";

export const PhotoAPI = {
  getRandomPhotos: async ({
    count,
  }: {
    count: number;
  }): Promise<GetPhotoDTO[]> => {
    const { data } = await axios.get(
      `${baseURL}/photos/random?client_id=${
        import.meta.env.VITE_UPSPLASH_ACC_KEY
      }&count=${count}`
    );
    return data;
  },
};
