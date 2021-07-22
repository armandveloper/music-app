import { keyframes } from 'styled-components';

export const expandPlayerAnimation = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const contractPlayerAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
`;

export const textMovingAnimation = `
  0% {
    transform: translate3d(0, 0, 0);
  }
  15% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;
