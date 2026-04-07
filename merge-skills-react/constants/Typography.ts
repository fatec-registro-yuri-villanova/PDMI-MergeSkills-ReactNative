/**
 * ==========================================================
 * TYPOGRAPHY.TS — DESIGN SYSTEM TOKENS (MergeSkills)
 * ==========================================================
 * 
 * Sincronizado rigorosamente com lddm-specs/design/tokens/typography.md
 */

import { TextStyle } from 'react-native';

export const Typography = {
  // ── Display ──
  displayLarge: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
  } as TextStyle,
  displayMedium: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  } as TextStyle,
  displaySmall: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  } as TextStyle,

  // ── Headline ──
  headlineLarge: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  } as TextStyle,
  headlineMedium: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  } as TextStyle,
  headlineSmall: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  } as TextStyle,

  // ── Title ──
  titleLarge: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  } as TextStyle,
  titleMedium: {
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  } as TextStyle,
  titleSmall: {
    fontFamily: 'Outfit_500Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  } as TextStyle,

  // ── Body ──
  bodyLarge: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  } as TextStyle,
  bodyMedium: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  } as TextStyle,
  bodySmall: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  } as TextStyle,

  // ── Label ──
  labelLarge: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  } as TextStyle,
  labelMedium: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,
  labelSmall: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,
};
