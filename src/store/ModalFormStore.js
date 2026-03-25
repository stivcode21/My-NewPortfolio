import { create } from "zustand";

const useModalFormStore = create((set) => ({
  modalState: false,
  btnModalState: false,
  commentDraft: "",
  setModalState: (state) => set({ modalState: state }),
  setBtnModalState: (state) => set({ btnModalState: state }),
  setCommentDraft: (commentDraft) => set({ commentDraft }),
}));

export default useModalFormStore;
