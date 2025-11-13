import create from 'zustand'

export const useAuthStore = create(set => ({
  user: null,
  isAdmin: false,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null, isAdmin: false }),
  setAdmin: (flag = true) => set({ isAdmin: flag }),
}))
