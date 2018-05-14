import styled from 'styled-components';

const size = 150;

export const ClockWrapper = styled.div`

display: block;
position: fixed;
top: -20px;
right: -20px;
height: ${size}px;
width: ${size}px;
z-index: 999999;
text-align: center;
color: #FFF;
transform: scale(0.75);

@media screen and (min-width: 720px) {
  top: 20px;
  right: 30px;
  transform: scale(1);
}

@keyframes clock {
    0% {
        opacity: 0.75;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    100% {
        opacity: 0.75;
        transform: scale(1);
    }
}

.clock {
  height: ${size}px;
  width: ${size}px;
  fill: transparent;
  stroke: #FFF;
  stroke-width: 1.5px;
  stroke-dasharray: 156 156;
  transform: rotate(0);
  cursor: pointer;
  user-select: none;
  transition: 150ms;
  animation: 2300ms ease-in-out infinite both clock;
}

.hour {
  display: block;
  top: 0;
  position: absolute;
  line-height: ${size + 6}px;
  width: ${size}px;
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  animation: 2300ms ease-in-out infinite both clock;
}
}
`
