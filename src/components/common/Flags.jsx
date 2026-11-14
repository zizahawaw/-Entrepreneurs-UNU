export const IndonesiaFlag = ({ className = 'ec-flag-icon' }) => (
  <svg
    viewBox="0 0 640 480"
    className={className}
    style={{ border: '1px solid rgba(0,0,0,0.08)' }}
  >
    <path fill="#e11d48" d="M0 0h640v240H0z" />
    <path fill="#ffffff" d="M0 240h640v240H0z" />
  </svg>
);

export const UKFlag = ({ className = 'ec-flag-icon' }) => (
  <svg
    viewBox="0 0 640 480"
    className={className}
    style={{ border: '1px solid rgba(0,0,0,0.08)' }}
  >
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path
      fill="#FFF"
      d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
    />
    <path
      fill="#C8102E"
      d="m424 288 216 159v33h-44L380 318l44-30zM640 22l-216 160h-48L592 0h48v22zM0 458l216-160h48L48 480H0v-22zM0 22 216 182l44-32L44 0H0v22z"
    />
    <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
    <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z" />
  </svg>
);
