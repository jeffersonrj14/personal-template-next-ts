export function showHoverAnimation(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within the element.
  const y = e.clientY - rect.top; // y position within the element.

  e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), rgba(255,255,255,0))`;
  e.currentTarget.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px, rgba(255,255,255,0.7), rgba(255,255,255,0.1)) 1 / 1px / 0px stretch`;
}

export function removeHoverAnimation(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.background = ""; // Set an empty string to clear the background
  e.currentTarget.style.borderImage = ""; // Set an empty string to clear the border image
}
