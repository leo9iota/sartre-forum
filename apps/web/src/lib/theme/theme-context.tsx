import { createContext, createEffect, createSignal, onMount, useContext } from 'solid-js';
import type { Accessor, ParentProps } from 'solid-js';

export type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Accessor<Theme>;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>();

/**
 * Theme storage key for localStorage
 */
const THEME_STORAGE_KEY = 'sartre-theme';

/**
 * ThemeProvider manages the current theme state with:
 * - localStorage persistence
 * - System preference detection
 * - Reactive theme switching
 */
export function ThemeProvider(props: ParentProps) {
  const [theme, setThemeState] = createSignal<Theme>('light');
  const [mounted, setMounted] = createSignal(false);

  onMount(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

    if (stored && (stored === 'light' || stored === 'dark')) {
      setThemeState(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }

    setMounted(true);
  });

  // Persist theme changes to localStorage
  createEffect(() => {
    if (mounted()) {
      localStorage.setItem(THEME_STORAGE_KEY, theme());
    }
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme() === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * Must be used within a ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
