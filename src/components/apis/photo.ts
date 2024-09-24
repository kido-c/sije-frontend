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
      `${baseURL}/photos/random?client_id=o9gS0R9sTLESEjreJWl334WrCj9Y54uJ24Gd3V0FvQM&count=${count}`
    );
    return data;
  },
};
