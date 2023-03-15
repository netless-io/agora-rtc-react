import type { PropsWithChildren } from "react";

import { clsx } from "clsx";
import { forwardRef } from "react";

const Item = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={clsx(className, "flex-1 b-1 b-solid b-coolgray-6 rd of-hidden relative")}
    >
      {children}
    </div>
  ),
);

export const AutoLayout = /* @__PURE__ */ Object.assign(
  /* @__PURE__ */ forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(
    ({ className, children }, ref) => (
      <div ref={ref} className={clsx(className, "flex-1 p-10 p-t-4 flex gap-5")}>
        {children}
      </div>
    ),
  ),
  { Item },
);
