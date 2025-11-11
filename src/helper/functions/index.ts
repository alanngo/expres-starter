import { LooseObject } from "../types";

export const indexObject = (obj: any, k: string) => (obj as LooseObject)[k]