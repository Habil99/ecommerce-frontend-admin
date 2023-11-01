export const valueIsString = (
  value: string | Record<string, unknown>
): value is string => {
  return typeof value === "string";
};
