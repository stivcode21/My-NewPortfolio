import { create } from "zustand";

const useAboutModalStore = create((set) => ({
  aboutModalState: false,
  setAboutModalState: (state) => set({ aboutModalState: state }),
}));

export default useAboutModalStore;
