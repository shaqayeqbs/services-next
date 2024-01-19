import create from "zustand";

const useExpertStore = create((set) => ({
  bookedExperts: [],
  addExpert: (expert) =>
    set((state) => ({ bookedExperts: [...state.bookedExperts, expert] })),
  removeExpert: (expertId) =>
    set((state) => ({
      bookedExperts: state.bookedExperts.filter(
        (expert) => expert.id !== expertId
      ),
    })),
}));

export default useExpertStore;
