/* ═══════════════════════════════════════════════════════════════
   GLOBAL COLOUR TOKENS — change everything site-wide from here.
   ═══════════════════════════════════════════════════════════════

   pageBg        → main page background (was pure white)
   pageBgAlt     → alternate section background (was offwhite/gray)
   cardBg        → cards sitting ON pageBgAlt sections
   cardBgAlt     → cards sitting ON pageBg sections
   borderColor   → all subtle borders
   dotBorder     → timeline dot ring colour
   darkSection   → replaces bg-navy on dark sections
   darkCard      → cards/items sitting inside darkSection
   darkBorder    → borders inside darkSection

   ── PRESETS ─────────────────────────────────────────────────────

   WARM CREAM (current):
     pageBg:        '#F5F0EB'
     pageBgAlt:     '#EDE6DC'
     cardBg:        '#FAF7F4'
     cardBgAlt:     '#EDE6DC'
     borderColor:   '#DDD5C8'
     dotBorder:     '#F5F0EB'
     darkSection:   '#2C2420'   ← warm dark brown, pairs with cream
     darkCard:      '#3A2F2A'   ← slightly lighter warm dark
     darkBorder:    '#4A3F3A'   ← warm dark border

   PURE WHITE (original):
     pageBg:        '#ffffff'
     pageBgAlt:     '#F8F8F6'
     cardBg:        '#ffffff'
     cardBgAlt:     '#F8F8F6'
     borderColor:   '#E5E7EB'
     dotBorder:     '#ffffff'
     darkSection:   '#1C2B3A'   ← standard navy
     darkCard:      '#243447'
     darkBorder:    '#2E4057'

   COOL GRAY:
     pageBg:        '#F4F4F5'
     pageBgAlt:     '#E4E4E7'
     cardBg:        '#F9F9FA'
     cardBgAlt:     '#E4E4E7'
     borderColor:   '#D4D4D8'
     dotBorder:     '#F4F4F5'
     darkSection:   '#18181B'
     darkCard:      '#27272A'
     darkBorder:    '#3F3F46'

   ═══════════════════════════════════════════════════════════════ */

export const COLORS = {
  // ── Light surface tokens ──────────────────────────────────────
  pageBg:      '#F5F0EB',
  pageBgAlt:   '#EDE6DC',
  cardBg:      '#FAF7F4',
  cardBgAlt:   '#EDE6DC',
  borderColor: '#DDD5C8',
  dotBorder:   '#F5F0EB',

  // ── Dark section tokens ───────────────────────────────────────
  // Warm dark brown — harmonises with the cream palette
  // rather than clashing with a cold navy
  darkSection: '#2C2420',
  darkCard:    '#3A2F2A',
  darkBorder:  '#4A3F3A',
};