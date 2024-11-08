import { create } from "zustand";

const ScoreCounter = create((set) => ({
  score: 0,
  increaseScore: () => set((state: { score: number }) => ({ score: state.score + 1 })),
  removeAllScore: () => set((state)=>({ score: 0 })),
  updateScore: (newScore: number) => set({ score: newScore }),
}));

export default ScoreCounter;