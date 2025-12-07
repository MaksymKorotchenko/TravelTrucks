import { Camper, CampersFilters } from "@/types/camper";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export interface apiResponse {
  total: number | null;
  items: Camper[];
}

interface queryParams {
  page: number;
  limit: number;
  AC?: string;
  kitchen?: string;
  TV?: string;
  bathroom?: string;
  water?: string;
  gas?: string;
  radio?: string;
  location?: string;
  transmission?: "automatic";
  form?: "alcove" | "fullyIntegrated" | "panelTruck";
  [key: string]: string | number | boolean | undefined;
}

export async function getCampers(
  page: number,
  limit: number,
  filters: CampersFilters
): Promise<apiResponse> {
  const params: queryParams = { page, limit };

  if (filters.location) params.location = filters.location;
  if (filters.form) params.form = filters.form;
  if (filters.transmission) params.transmission = filters.transmission;

  if (filters.categories?.length) {
    filters.categories.forEach((category) => {
      params[category] = true;
    });
  }

  const res = await axios.get<apiResponse>("/campers", {
    params,
  });
  return { items: res.data.items, total: res.data.total };
}

export async function getCamperById(camperId: Camper["id"]): Promise<Camper> {
  const res = await axios.get<Camper>(`/campers/${camperId}`);
  return res.data;
}
