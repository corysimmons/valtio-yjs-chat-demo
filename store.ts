import { proxy } from "valtio";
import { bind } from "valtio-yjs";

import { ymap } from "./yjsInstance";

export const state = proxy({
  test: 123
});

export const unbind = bind(state, ymap);
