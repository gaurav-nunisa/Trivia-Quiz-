import { create } from "zustand";

const ScoreCounter = create<{
  score:number;
  removeAllScore: () => void;
  increaseScore: () => void;
  updateScore: (newScore: number) => void;
}>((set) => ({
  score: 0,
  increaseScore: () => set((state: { score: number }) => ({ score: state.score + 1 })),
  removeAllScore: () => set((state)=>({ score : state.score = 0 })),
  updateScore: (newScore: number) => set({ score: newScore }),
}));

export default ScoreCounter;