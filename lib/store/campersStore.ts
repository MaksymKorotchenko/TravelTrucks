import { Camper } from "@/types/camper";
import { create } from "zustand";
import { CampersFilters } from "@/types/camper";

type CampersStore = {
  campers: Camper[];
  total: number | null;
  page: number;
  filters: CampersFilters;
  favourites: string[];
  setCampers: (items: Camper[]) => void;
  appendCampers: (items: Camper[]) => void;
  setPage: (page: number) => void;
  nextPage: () => void;
  resetCampers: () => void;
  toggleCategory: (name: string) => void;
  setFilters: (filters: CampersFilters) => void;
  clearFilters: () => void;
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
};

export const useCampersStore = create<CampersStore>((set, get) => ({
  campers: [],
  total: null,
  page: 1,
  filters: {},
  favourites: [],

  setCampers: (items) =>
    set({
      campers: items,
    }),

  appendCampers: (items) =>
    set((state) => ({
      campers: [...state.campers, ...items],
    })),

  setPage: (page) => set({ page }),
  nextPage: () => set({ page: get().page + 1 }),

  resetCampers: () =>
    set({
      campers: [],
      total: null,
      page: 1,
    }),

  toggleCategory: (name: string) =>
    set((state) => {
      const current = state.filters.categories ?? [];
      return {
        filters: {
          ...state.filters,
          categories: current.includes(name)
            ? current.filter((c) => c !== name)
            : [...current, name],
        },
      };
    }),

  setFilters: (filters) =>
    set({
      filters,
      page: 1,
      campers: [],
    }),

  clearFilters: () =>
    set({
      filters: {},
      page: 1,
      campers: [],
    }),

  toggleFavourite: (id) => {
    const favs = get().favourites;
    const exists = favs.includes(id);

    set({
      favourites: exists ? favs.filter((f) => f !== id) : [...favs, id],
    });
  },

  isFavourite: (id) => get().favourites.includes(id),
}));
