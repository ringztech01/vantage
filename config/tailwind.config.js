/** VIEL Tailwind config v1.0 — spacing unit: 1 = 8px */
module.exports = {
  content: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    container: { center: true, padding: { DEFAULT: '20px', lg: '32px' }, screens: { xl: '1280px' } },
    spacing: {
      0: '0', px: '1px', 0.5: '4px', 1: '8px', 1.5: '12px', 2: '16px', 3: '24px', 4: '32px',
      5: '40px', 6: '48px', 8: '64px', 10: '80px', 12: '96px', 16: '128px',
      header: '72px', utility: '36px', row: '44px', 'row-compact': '36px',
    },
    borderRadius: { none: '0', sm: '4px', md: '8px', lg: '12px', full: '9999px' },
    colors: {
      transparent: 'transparent', current: 'currentColor', white: '#FFFFFF',
      navy: { 50:'#EEF2F8',100:'#D6DFEC',200:'#AEBFD8',300:'#7F97BD',400:'#4F6F9E',500:'#2C4F80',600:'#1C5180',700:'#133A66',800:'#0D2B4F',900:'#081B33', DEFAULT:'#0D2B4F' },
      green: { 50:'#F4F9EC',100:'#E5F1D2',200:'#CCE3A6',300:'#B0D275',400:'#9CC553',500:'#8AB83F',600:'#6F9A2E',700:'#557825',800:'#3E581C',900:'#283912', DEFAULT:'#8AB83F' },
      gray: { 0:'#FFFFFF',50:'#F5F7FA',100:'#EBEEF3',200:'#DCE1E8',300:'#C3CAD5',400:'#98A2B3',500:'#6B7587',600:'#4D5667',700:'#363E4C',800:'#222935',900:'#121720' },
      completed: { fg:'#1E6B45', bg:'#E6F4EC', bd:'#B7DFC8', dot:'#2E9B63' },
      ongoing:   { fg:'#1B55A3', bg:'#E7F0FB', bd:'#BCD3F2', dot:'#2F74D0' },
      awarded:   { fg:'#5B3AA8', bg:'#F1ECFB', bd:'#D6C8F3', dot:'#7C5CD6' },
      danger:    { DEFAULT:'#B8322A', bg:'#FBECEA' },
    },
    fontFamily: {
      display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      display:    ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '800' }],
      title:      ['40px', { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '700' }],
      section:    ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '700' }],
      subsection: ['20px', { lineHeight: '28px', fontWeight: '600' }],
      card:       ['16px', { lineHeight: '24px', fontWeight: '600' }],
      lead:       ['18px', { lineHeight: '28px' }],
      body:       ['15px', { lineHeight: '24px' }],
      data:       ['13px', { lineHeight: '20px' }],
      label:      ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '600' }],
      caption:    ['12px', { lineHeight: '16px' }],
    },
    boxShadow: {
      none: 'none',
      xs: '0 1px 2px rgba(10,34,64,.06)',
      sm: '0 1px 3px rgba(10,34,64,.08), 0 1px 2px rgba(10,34,64,.04)',
      md: '0 4px 12px -2px rgba(10,34,64,.10), 0 2px 4px rgba(10,34,64,.04)',
      lg: '0 12px 32px -8px rgba(10,34,64,.16), 0 4px 8px rgba(10,34,64,.04)',
      xl: '0 24px 64px -16px rgba(10,34,64,.24)',
      focus: '0 0 0 3px rgba(138,184,63,.45)',
    },
    extend: {
      maxWidth: { container: '1280px' },
      zIndex: { header: '50', dropdown: '60', modal: '100' },
    },
  },
};
