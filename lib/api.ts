import { Camper } from "@/types/camper";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export async function getCampers(page: number) {
  const res = await axios.get<Camper[]>("/campers", {
    params: {
      page,
    },
  });
  return res.data;
}
