import { tv } from "tailwind-variants";
import type { ReactNode, ReactElement } from "react";
import * as React from "react";

interface ViewParams {
  prop?: string;
  value?: string;
  direction?: "column" | "row";
  justify?: "start" | "evenly";
  children?: ReactNode;
}

interface EnHancedViewParams {
  prop?: string;
  value?: string;
  children?: ReactElement;
}
export function View({
  prop,
  value = "",
  direction = "row",
  justify = "evenly",
  children,
}: ViewParams): ReactNode {
  const flexDirection = direction === "column" ? "column" : "row";
  const justifyContent = justify === "start" ? "flex-start" : "space-evenly";
  return (
    <div className="grow flex flex-col border divide-y divide-gray-200 rounded-lg shadow-sm">
      <div className="flex space-x-2 items-center bg-gray-100/75 text-gray-800 p-2.5">
        {prop}
        {value ? <Badge>{value}</Badge> : null}
      </div>
      <div
        className="bg-grid bg-gray-50/25 flex flex-wrap items-start justify-center gap-x-2 gap-y-2 p-2.5"
        style={{ flexDirection, justifyContent }}
      >
        {children}
      </div>
    </div>
  );
}

export function EnhancedView({
  prop,
  value = "",
  ...props
}: EnHancedViewParams): ReactNode {
  const child = React.Children.only(props.children);
  const { children, ...rest } = child!.props;

  return (
    <div className="flex flex-col border divide-y divide-gray-200 rounded-lg shadow-sm">
      <div className="flex space-x-2 items-center bg-gray-100/75 text-gray-800 p-2.5">
        {prop}
        {value ? <Badge>{value}</Badge> : null}
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col min-w-[250px] border divide-y divide-gray-200 rounded m-2.5 text-sm ">
          <span className="font-medium p-1.5">Props</span>
          {Object.keys(rest).map((prop) => (
            <div className="flex items-center space-x-0 p-1.5" key={prop}>
              <div className="text-gray-500">{prop}</div>
              {typeof rest[prop] === "string" && (
                <div className="text-gray-800">
                  <Badge>{rest[prop]}</Badge>
                </div>
              )}
            </div>
          ))}
          {!Object.keys(rest).length && (
            <span className="text-gray-700 p-1.5">No properties selected</span>
          )}
        </div>
        <div className="bg-grid relative bg-gray-50/50 flex-1 p-2.5">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center space-x-0">
      <span>=&quot;</span>
      <div className="rounded px-1 text-sm bg-yellow-100 text-yellow-700 border border-dashed border-red-200">
        {children}
      </div>
      <span>&quot;</span>
    </div>
  );
}

export function ViewGroup({
  children,
  direction = "column",
}: {
  children: ReactNode;
  direction?: "column" | "row";
}) {
  const viewClasses = tv({
    base: "flex justify-evenly",
    variants: {
      direction: {
        row: ["flex-row", "space-x-5"],
        column: ["flex-col", "space-y-5"],
      },
    },
  });

  return <div className={viewClasses({ direction })}>{children}</div>;
}
