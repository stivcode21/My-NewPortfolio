import { create } from "zustand";

const useModalFormStore = create((set) => ({
  modalState: false,
  btnModalState: false,
  setModalState: (state) => set({ modalState: state }),
  setBtnModalState: (state) => set({ btnModalState: state }),
}));

export default useModalFormStore;
