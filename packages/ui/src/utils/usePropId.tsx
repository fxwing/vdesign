import { useId } from "react";

export function usePropId(propId: string): string {
  const id = useId();
  return propId || id;
}
