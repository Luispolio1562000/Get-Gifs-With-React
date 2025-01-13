import { render, screen } from "@testing-library/react";
import GiftCard from "../../../src/components/GiftCard";

describe("Tests <GiftCard />", () => {
  const title = "Gift Card";
  const url = "https://github.com/";
  test("Should match to Snapshot", () => {
    const { container } = render(<GiftCard title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the image with the URL and ALT indicated", () => {
    render(<GiftCard title={title} url={url} />);
    //screen.debug();
    //* Html IMG element.
    // console.log(screen.getByRole("img").src);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GiftCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
