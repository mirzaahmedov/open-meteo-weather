type IconProps = {
  size?: number;
  color?: string;
};

export const SearchIcon = ({
  size = 24,
  color = 'currentColor',
}: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fill={color}
      d="M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21ZM21.3 21.999C21.12 21.999 20.94 21.929 20.81 21.799L18.95 19.939C18.8202 19.807 18.7474 19.6292 18.7474 19.444C18.7474 19.2588 18.8202 19.081 18.95 18.949C19.22 18.679 19.66 18.679 19.94 18.949L21.8 20.809C22.07 21.079 22.07 21.519 21.8 21.799C21.66 21.929 21.48 21.999 21.3 21.999Z" />
  </svg>
);
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8334 19.14L19.7034 19.01M19.7034 4.99L19.8334 4.86M5.55336 19.14L5.68336 19.01M12.6934 2.08V2M12.6934 22V21.92M2.77336 12H2.69336M22.6934 12H22.6134M5.68336 4.99L5.55336 4.86"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WindIcon = ({ color = 'currentColor', size = 24 }: IconProps) => {
  return (
    <svg
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 23.4387C17.8736 23.4361 16.7942 22.9875 15.9977 22.191C15.2013 21.3945 14.7526 20.3151 14.75 19.1887V18.6887C14.75 18.2787 15.09 17.9387 15.5 17.9387C15.91 17.9387 16.25 18.2787 16.25 18.6887V19.1887C16.25 20.7087 17.48 21.9387 19 21.9387C20.52 21.9387 21.75 20.7087 21.75 19.1887C21.75 17.6687 20.52 16.4387 19 16.4387H2.5C2.09 16.4387 1.75 16.0987 1.75 15.6887C1.75 15.2787 2.09 14.9387 2.5 14.9387H19C20.1264 14.9414 21.2058 15.39 22.0023 16.1864C22.7987 16.9829 23.2474 18.0624 23.25 19.1887C23.2474 20.3151 22.7987 21.3945 22.0023 22.191C21.2058 22.9875 20.1264 23.4361 19 23.4387ZM19 13.4387H2.5C2.09 13.4387 1.75 13.0987 1.75 12.6887C1.75 12.2787 2.09 11.9387 2.5 11.9387H19C20.52 11.9387 21.75 10.7087 21.75 9.18872C21.75 7.66872 20.52 6.43872 19 6.43872C17.48 6.43872 16.25 7.66872 16.25 9.18872V9.68872C16.25 10.0987 15.91 10.4387 15.5 10.4387C15.09 10.4387 14.75 10.0987 14.75 9.68872V9.18872C14.7526 8.06236 15.2013 6.98289 15.9977 6.18643C16.7942 5.38998 17.8736 4.94136 19 4.93872C20.1264 4.94136 21.2058 5.38998 22.0023 6.18643C22.7987 6.98289 23.2474 8.06236 23.25 9.18872C23.2474 10.3151 22.7987 11.3945 22.0023 12.191C21.2058 12.9875 20.1264 13.4361 19 13.4387Z"
        fill="white"
      />
      <path
        d="M9.81 10.4397H2.5C2.09 10.4397 1.75 10.0997 1.75 9.68969C1.75 9.27969 2.09 8.93969 2.5 8.93969H9.81C10.88 8.93969 11.75 8.06969 11.75 6.99969C11.75 5.92969 10.88 5.05969 9.81 5.05969C8.74 5.05969 7.87 5.92969 7.87 6.99969V7.37969C7.87 7.47819 7.8506 7.57571 7.81291 7.66671C7.77522 7.7577 7.71997 7.84038 7.65033 7.91002C7.58069 7.97967 7.49801 8.03491 7.40701 8.0726C7.31602 8.11029 7.21849 8.12969 7.12 8.12969C7.02151 8.12969 6.92398 8.11029 6.83299 8.0726C6.74199 8.03491 6.65931 7.97967 6.58967 7.91002C6.52003 7.84038 6.46478 7.7577 6.42709 7.66671C6.3894 7.57571 6.37 7.47819 6.37 7.37969V6.99969C6.37 6.31933 6.57175 5.65424 6.94974 5.08853C7.32774 4.52283 7.86499 4.08191 8.49357 3.82155C9.12215 3.56118 9.81382 3.49306 10.4811 3.62579C11.1484 3.75853 11.7614 4.08615 12.2424 4.56725C12.7235 5.04834 13.0512 5.66129 13.1839 6.32858C13.3166 6.99588 13.2485 7.68755 12.9881 8.31612C12.7278 8.9447 12.2869 9.48196 11.7212 9.85995C11.1555 10.2379 10.4904 10.4397 9.81 10.4397Z"
        fill="white"
      />
    </svg>
  );
};
export const ArrowBack = ({ color = 'currentColor', size = 24 }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
