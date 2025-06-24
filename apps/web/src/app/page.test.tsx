import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "./page";

// Mock articles data
jest.mock("../hardcoded-data/articles", () => ({
  articles: [
    {
      slug: "article-1",
      title: "Sports Article",
      type: ["Sports"],
      author: "Author A",
      date: "2024-01-01",
      content: "Content A",
    },
    {
      slug: "article-2",
      title: "Business Article",
      type: ["Business"],
      author: "Author B",
      date: "2024-02-01",
      content: "Content B",
    },
    {
      slug: "article-3",
      title: "Sports Article 2",
      type: ["Sports"],
      author: "Author C",
      date: "2024-03-01",
      content: "Content C",
    },
  ],
}));

describe("HomePage", () => {
  it("shows grouped articles by category initially", () => {
    render(<HomePage />);

    // Check category headings
    expect(screen.getByRole("heading", { name: "Business" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sports" })).toBeInTheDocument();

    // All articles are rendered
    expect(screen.getByText("Sports Article")).toBeInTheDocument();
    expect(screen.getByText("Sports Article 2")).toBeInTheDocument();
    expect(screen.getByText("Business Article")).toBeInTheDocument();
  });

  it("filters articles when a category is clicked", () => {
    render(<HomePage />);

    // Click on "Sports" category button in sidebar
    fireEvent.click(screen.getByRole("button", { name: "Sports" }));

    // Now only Sports articles should be shown
    expect(screen.getByRole("heading", { name: "Sports" })).toBeInTheDocument();
    expect(screen.getByText("Sports Article")).toBeInTheDocument();
    expect(screen.getByText("Sports Article 2")).toBeInTheDocument();

    // Business article should NOT be visible
    expect(screen.queryByText("Business Article")).not.toBeInTheDocument();
  });

  it("resets filter when clicking 'Reset' button", () => {
    render(<HomePage />);

    // Apply filter first
    fireEvent.click(screen.getByRole("button", { name: "Sports" }));
    // We see only the sports article
    expect(screen.getByText("Sports Article")).toBeInTheDocument()
    expect(screen.queryByText("Business Article")).not.toBeInTheDocument()

    // Click Reset button
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    // Articles from both categories should be visible
    expect(screen.getByText("Sports Article")).toBeInTheDocument();
    expect(screen.getByText("Business Article")).toBeInTheDocument();
  });
});
