it('should work with optional chaining', () => {
  const myObject = { a: { b: { c: 1 } } };
  expect(myObject!.a!.b!.c).toBe(1);
});