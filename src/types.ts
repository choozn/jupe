export type TaskFunction<ARGS extends unknown[], RETURN> = (...args: ARGS) => RETURN;

type TaskReturn = { _type: "TaskReturn" };
export type Plugin<OpusData = object, ReturnType = TaskReturn> = (
  task: () => Promise<Awaited<ReturnType>>,
  params: OptionalIfEmpty<OpusData>
) => Promise<Awaited<ReturnType>>;

export type DataFromPlugins<Plugins extends unknown[]> = ExpandRecursively<
  TupleToIntersection<{
    [I in keyof Plugins]: Plugins[I] extends Plugin<infer M> ? M : never;
  }>
>;

// Util
export type TupleToIntersection<T extends unknown[]> = {
  [I in keyof T]: (x: T[I]) => void;
}[number] extends (x: infer I) => void
  ? I
  : never;

export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

export type OptionalIfEmpty<T> = keyof T extends never ? void : T;
