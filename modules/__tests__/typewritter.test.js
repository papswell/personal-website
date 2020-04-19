import TypeWritter from "./../typewritter";

describe("TypeWritter", () => {
  it("should type the whoe content after delay", async () => {
    const spy = jest.fn();

    const writter = new TypeWritter("Hello world", spy);

    await writter.run();

    expect(spy).toHaveBeenCalledWith("H");
    expect(spy).toHaveBeenCalledWith("He");
    expect(spy).toHaveBeenCalledWith("Hel");
    expect(spy).toHaveBeenCalledWith("Hell");
    expect(spy).toHaveBeenCalledWith("Hello");
    expect(spy).toHaveBeenCalledWith("Hello ");
    expect(spy).toHaveBeenCalledWith("Hello w");
    expect(spy).toHaveBeenCalledWith("Hello wo");
    expect(spy).toHaveBeenCalledWith("Hello wor");
    expect(spy).toHaveBeenCalledWith("Hello worl");
    expect(spy).toHaveBeenCalledWith("Hello world");
  });
});
