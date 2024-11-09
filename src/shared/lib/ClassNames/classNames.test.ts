import classNames from "./classNames";

describe("classNames", () => {
    test("with only one first param", () => {
        expect(classNames("name")).toBe("name");
    });
    test("with 2 params and mod is truthy", () => {
        expect(classNames("name", { surname: true })).toBe("name surname");
    });
    test("with all params truthy", () => {
        expect(classNames("name", { surname: true }, ["hellscape"])).toBe("name hellscape surname");
    });
    test("with false mods", () => {
        expect(classNames("name", { surname: true, falsy: false }, ["hellscape"])).toBe(
            "name hellscape surname",
        );
    });
});
