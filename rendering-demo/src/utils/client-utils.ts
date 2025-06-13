import "client-only";

export const clientSideFunction = () => {
  console.log(`use window
        use local storage`);

  return "client result";
};
