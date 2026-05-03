import { create } from 'zustand';
import { logger } from '@/lib/log';

/**
 * Global Application State Store
 *
 * Manages client-side state that needs to be shared across components:
 * - Current locale
 * - UI theme
 * - User preferences
 *
 * Usage in components:
 *   import { useAppStore } from '@/store/appStore';
 *   const counter = useAppStore((state) => state.counter);
 *   const increment = useAppStore((state) => state.incrementCounter);
 */

export interface AppState {
  // Locale
  locale: string;
  setLocale: (locale: string) => void;

  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // User preferences
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Locale
  locale: 'en',
  setLocale: (locale: string) => {
    logger.info(`Locale changed, { locale: ${locale} }`);
    set({ locale });
  },

  // Theme
  theme: 'light',
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      logger.debug(`Theme toggled, { theme: ${newTheme} }`);
      return { theme: newTheme };
    });
  },

  // UI state
  sidebarOpen: true,
  toggleSidebar: () => {
    set((state) => {
      const newState = !state.sidebarOpen;
      logger.debug(`Sidebar toggled, { open: ${newState} }`);
      return { sidebarOpen: newState };
    });
  },
}));
