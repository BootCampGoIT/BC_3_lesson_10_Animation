import transition from "styled-transition-group";

// const Title = transition.h2`
//   &:appear { opacity: 0.01; }
//   &:appear-active {
//     opacity: 1;
//     transition: opacity 3000ms ease-in;
//   }
// `;

// export { Title };

const Title = transition.h2.attrs({
  timeout: 3000,
})`
    &:appear { opacity: 0.01; }
    &:appear-active {
      opacity: 1;
      transition: opacity 1000ms ease-in;
    }
  `;

export { Title };
