# Fix: Bottom Navigation Overlap & Unclickable Tabs

## Problem

The app's bottom navigation (tab bar) visually overlaps with the native system navigation, and **clicks on the app's tab bar don't work** — only the native system navigation responds to touches.

## Root Cause

**Double safe-area bottom compensation:**

1. `(tabs)/_layout.tsx` — Tab bar adds `insets.bottom` to its `height` and `paddingBottom` ✅ (correct)
2. `(tabs)/index.tsx` and `profile.tsx` — Each screen wraps content in `<SafeAreaView edges={['bottom']}>` ❌ (conflict!)

The screen-level `SafeAreaView edges={['bottom']}` adds extra bottom padding **on top of** the tab bar's own bottom handling. This pushes the SafeAreaView's bottom padding area **over** the tab bar, creating an invisible touch-intercepting layer.

## Fix Strategy (3 Agents)

### Agent 1: `@debugger` — Root Cause Diagnosis ✅
- Identified the double-inset conflict (done above)

### Agent 2: `@mobile-developer` — Screen Layout Fix

#### [MODIFY] `(tabs)/index.tsx`
- **Remove** `edges={['bottom']}` from `SafeAreaView` → change to `edges={['top']}`
- Remove hardcoded `paddingTop: 50` from header (SafeAreaView top handles it now)
- Remove `height: 120` from header (no longer needed with proper top inset)

#### [MODIFY] `(tabs)/profile.tsx`
- **Remove** `edges={['bottom']}` from `SafeAreaView` → change to `edges={['top']}`
- Remove hardcoded `paddingTop: 30` from header

#### [MODIFY] `(tabs)/_layout.tsx`
- Keep current tab bar logic (correct)
- Ensure `position: 'absolute'` is **NOT** set (default behavior is fine)

### Agent 3: `@frontend-specialist` — Verify Layout Integrity
- Ensure no content is hidden behind tab bar (FlatList `paddingBottom` is sufficient)
- Confirm top status bar area is properly handled by `edges={['top']}`

## Key Principle

> Tab screens should handle `top` safe area only.
> The `Tabs` navigator handles `bottom` safe area via `tabBarStyle`.
