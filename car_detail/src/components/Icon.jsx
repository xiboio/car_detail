const paths = {
  car: <><path d="m5 10 2-5h10l2 5 2 3v6H3v-6l2-3Z"/><path d="M5 10h14M6 15h2m8 0h2M6 19v2m12-2v2"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
  service: <><path d="m14 3 1.8 5.2L21 10l-5.2 1.8L14 17l-1.8-5.2L7 10l5.2-1.8L14 3Z"/><path d="m5 15 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/></>,
};
export default function Icon({ name, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.info}</svg>;
}
