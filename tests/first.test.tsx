import renderer from "react-test-renderer";
import Intro from "@/components/Intro";
// import { sum } from "@/functions";
export const sum = (a: number, b: number) => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBeTruthy;
});
test("renders correctly", () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
