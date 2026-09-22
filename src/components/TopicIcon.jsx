export default function TopicIcon({ type, color }) {
  if (type === 'agents') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
      </svg>
    );
  }

  if (type === 'humans') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="12.8" y="6.2" width="8" height="6.6" rx="2" />
      <path d="M16.8 6.2V4.1M15.2 9.3v.9M18.4 9.3v.9M11.8 20.5v-1.2a4.9 4.9 0 0 1 9.8 0v1.2" />
      <circle cx="16.8" cy="3.2" r=".9" />
      <circle cx="8" cy="7.6" r="3.1" fill="#fff" />
      <path d="M2.4 20.5v-1a5.6 5.6 0 0 1 11.2 0v1" fill="#fff" />
    </svg>
  );
}
