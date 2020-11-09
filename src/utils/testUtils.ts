import { act } from "react-dom/test-utils";

export const mountUrl = (path: string) => {
  return new RegExp(`.*\/${path}.*`);
};

export const waitTimeout = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const waitForComponentToPaint = async (wrapper, time = 0) => {
  await act(async () => {
    await waitTimeout(time);
    wrapper.update();
  });
};
