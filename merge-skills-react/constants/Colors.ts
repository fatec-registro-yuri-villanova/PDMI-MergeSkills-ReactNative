/**
 * ==========================================================
 * COLORS.TS — DESIGN SYSTEM TOKENS (MergeSkills)
 * ==========================================================
 * 
 * Sincronizado rigorosamente com lddm-specs/design/tokens/colors.md
 */

const Brand = {
  StitchGreen: '#4CDF20',
  StitchGreenWhite: '#E2FFE0',
  StitchGreenDark: '#36A015',
  StitchGreenContainer: '#1B4D0B',
  StitchOnGreen: '#000000',
  StitchError: '#FF453A',
};

export default {
  light: {
    text: '#000000',
    background: '#F5F5F7',
    tint: Brand.StitchGreen,
    tabIconDefault: '#8E8E93',
    tabIconSelected: Brand.StitchGreen,
    
    // Material3 Slots
    primary: Brand.StitchGreen,
    onPrimary: Brand.StitchOnGreen,
    surface: '#FFFFFF',
    onSurface: '#1C1C1E',
    surfaceVariant: '#E5E5EA',
    outline: '#8E8E93',
    error: Brand.StitchError,
  },
  dark: {
    text: '#FFFFFF',
    background: '#0F0F0F',
    tint: Brand.StitchGreen,
    tabIconDefault: '#8E8E93',
    tabIconSelected: Brand.StitchGreen,
    
    // Material3 Slots
    primary: Brand.StitchGreen,
    onPrimary: Brand.StitchOnGreen,
    surface: '#1C1C1E',
    onSurface: '#E5E5E5',
    surfaceVariant: '#2C2C2E',
    outline: '#8E8E93',
    error: Brand.StitchError,
  },
};
