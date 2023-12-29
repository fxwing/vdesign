export function setColor(colorString: string) {
  const colors = ["primary", "secondary", "tertiary", "error"];
  if (colors.includes(colorString)) {
    return `rgb(var(--color-${colorString}))`;
  }
  return colorString;
}
