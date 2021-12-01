const { strncat } = require("../index");

test("Concats two strings together", () => {
    let a = "foo";
    let b = "bar";
    expect(strncat(a, b, 3)).toBe("foobar");
});
test("Concats part of a string", () => {
    let a = "this is";
    let b = " just a c function";
    expect(strncat(a, b, 6)).toBe("this is just ");
});
test("Concats a shorter string than num", () => {
    let a = "just another";
    let b = " testing example";
    expect(strncat(a, b, 100)).toBe("just another testing example");
});
test("Nil params cause an error", () => {
    expect(() => strncat(null, "foo", 2)).toThrow("[strncat] Destination must be a string");
    expect(() => strncat("foo", undefined, 2)).toThrow("[strncat] Source must be a string");
    expect(() => strncat("foo", "bar", null)).toThrow("[strncat] Num must be a number");
});
test("Can concat zero or negative amounts of characters", () => {
    let a = "foo";
    let b = "bar";
    expect(strncat(a, b, 0)).toBe("foo");
    expect(strncat(a, b, -2)).toBe("foo");
});