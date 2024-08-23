import { create } from "zustand";

export const useSlipModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  data: 10,
  setData: (data) => {
    set((state) => ({
      data: data,
    }));
  },
}));

export const useAgentBalanceModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  data: {},
  setData: (data) => set({ data: data }),
}));

export const useAgentGeneralModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  data: {},
  setData: (data) => set({ data: data }),
}));

export const useAgentCommissionModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  data: {},
  setData: (data) => set({ data: data }),
}));

export const useAgentPasswordModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  data: {},
  setData: (data) => set({ data: data }),
}));
