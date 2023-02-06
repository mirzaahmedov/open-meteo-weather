type IconProps = {
  size?: number;
  color?: string;
};

export const LocationIcon = ({
  size = 24,
  color = 'currentColor',
}: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.12 8.45C20.07 3.83 16.04 1.75 12.5 1.75C12.5 1.75 12.5 1.75 12.49 1.75C8.95997 1.75 4.91997 3.82 3.86997 8.44C2.69997 13.6 5.85997 17.97 8.71997 20.72C9.77997 21.74 11.14 22.25 12.5 22.25C13.86 22.25 15.22 21.74 16.27 20.72C19.13 17.97 22.29 13.61 21.12 8.45ZM12.5 13.46C10.76 13.46 9.34997 12.05 9.34997 10.31C9.34997 8.57 10.76 7.16 12.5 7.16C14.24 7.16 15.65 8.57 15.65 10.31C15.65 12.05 14.24 13.46 12.5 13.46Z"
      fill={color}
    />
  </svg>
);

export const SunsetIcon = ({
  size = 24,
  color = 'currentColor',
}: IconProps) => {
  return (
    <svg
      height={size}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1734 11.25C18.2407 11.2501 18.3074 11.2365 18.3694 11.2101C18.4314 11.1838 18.4875 11.1451 18.5342 11.0966C18.5809 11.048 18.6173 10.9905 18.6412 10.9275C18.6651 10.8645 18.6761 10.7973 18.6734 10.73C18.5426 8.96832 17.7504 7.32128 16.4558 6.11939C15.1612 4.9175 13.4599 4.2497 11.6934 4.25C8.00336 4.25 4.98336 7.1 4.71336 10.73C4.71066 10.7973 4.7216 10.8645 4.74552 10.9275C4.76944 10.9905 4.80584 11.048 4.85254 11.0966C4.89924 11.1451 4.95528 11.1838 5.01728 11.2101C5.07929 11.2365 5.14598 11.2501 5.21336 11.25H18.1734ZM21.6934 12H21.6134C21.0634 12 20.6134 11.55 20.6134 11C20.6134 10.45 21.0634 10 21.6134 10C22.1634 10 22.6534 10.45 22.6534 11C22.6534 11.55 22.2434 12 21.6934 12ZM1.77336 12H1.69336C1.14336 12 0.693359 11.55 0.693359 11C0.693359 10.45 1.14336 10 1.69336 10C2.24336 10 2.73336 10.45 2.73336 11C2.73336 11.55 2.32336 12 1.77336 12ZM18.7034 4.99C18.4434 4.99 18.1934 4.89 17.9934 4.7C17.9007 4.60749 17.8271 4.4976 17.7769 4.37662C17.7267 4.25565 17.7009 4.12597 17.7009 3.995C17.7009 3.86403 17.7267 3.73435 17.7769 3.61338C17.8271 3.4924 17.9007 3.38251 17.9934 3.29L18.1234 3.16C18.2159 3.06742 18.3259 2.99398 18.4468 2.94387C18.5678 2.89377 18.6974 2.86798 18.8284 2.86798C18.9593 2.86798 19.0889 2.89377 19.2099 2.94387C19.3309 2.99398 19.4408 3.06742 19.5334 3.16C19.6259 3.25258 19.6994 3.36249 19.7495 3.48346C19.7996 3.60442 19.8254 3.73407 19.8254 3.865C19.8254 3.99593 19.7996 4.12558 19.7495 4.24654C19.6994 4.36751 19.6259 4.47742 19.5334 4.57L19.4034 4.7C19.2134 4.89 18.9634 4.99 18.7034 4.99ZM4.68336 4.99C4.42336 4.99 4.17336 4.89 3.97336 4.7L3.84336 4.56C3.75078 4.46742 3.67734 4.35751 3.62723 4.23654C3.57713 4.11558 3.55134 3.98593 3.55134 3.855C3.55134 3.72407 3.57713 3.59442 3.62723 3.47346C3.67734 3.35249 3.75078 3.24258 3.84336 3.15C3.93594 3.05742 4.04585 2.98398 4.16682 2.93387C4.28778 2.88377 4.41743 2.85798 4.54836 2.85798C4.67929 2.85798 4.80894 2.88377 4.9299 2.93387C5.05087 2.98398 5.16078 3.05742 5.25336 3.15L5.38336 3.28C5.77336 3.67 5.77336 4.3 5.38336 4.69C5.19336 4.89 4.93336 4.99 4.68336 4.99ZM11.6934 2.04C11.1434 2.04 10.6934 1.63 10.6934 1.08V1C10.6934 0.45 11.1434 0 11.6934 0C12.2434 0 12.6934 0.45 12.6934 1C12.6934 1.55 12.2434 2.04 11.6934 2.04ZM19.6934 14.75H3.69336C3.28336 14.75 2.94336 14.41 2.94336 14C2.94336 13.59 3.28336 13.25 3.69336 13.25H19.6934C20.1034 13.25 20.4434 13.59 20.4434 14C20.4434 14.41 20.1034 14.75 19.6934 14.75ZM17.6934 17.75H5.69336C5.28336 17.75 4.94336 17.41 4.94336 17C4.94336 16.59 5.28336 16.25 5.69336 16.25H17.6934C18.1034 16.25 18.4434 16.59 18.4434 17C18.4434 17.41 18.1034 17.75 17.6934 17.75ZM14.6934 20.75H8.69336C8.28336 20.75 7.94336 20.41 7.94336 20C7.94336 19.59 8.28336 19.25 8.69336 19.25H14.6934C15.1034 19.25 15.4434 19.59 15.4434 20C15.4434 20.41 15.1034 20.75 14.6934 20.75Z"
        fill={color}
      />
    </svg>
  );
};

export const SunIcon = ({ color = 'currentColor', size = 24 }: IconProps) => {
  return (
    <svg
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6934 18.5C14.4173 18.5 16.0706 17.8152 17.2896 16.5962C18.5085 15.3772 19.1934 13.7239 19.1934 12C19.1934 10.2761 18.5085 8.62279 17.2896 7.40381C16.0706 6.18482 14.4173 5.5 12.6934 5.5C10.9695 5.5 9.31615 6.18482 8.09717 7.40381C6.87818 8.62279 6.19336 10.2761 6.19336 12C6.19336 13.7239 6.87818 15.3772 8.09717 16.5962C9.31615 17.8152 10.9695 18.5 12.6934 18.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.8334 19.14L19.7034 19.01M19.7034 4.99L19.8334 4.86M5.55336 19.14L5.68336 19.01M12.6934 2.08V2M12.6934 22V21.92M2.77336 12H2.69336M22.6934 12H22.6134M5.68336 4.99L5.55336 4.86"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};