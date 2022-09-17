import create from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: (num: any) => set((state: any) => ({ bears: state.bears + num })),
  removeAllBears: () => set({ bears: 0 })
}))

export { useBearStore }
