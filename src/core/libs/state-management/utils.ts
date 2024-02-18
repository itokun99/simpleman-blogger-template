import { StoreApi } from 'zustand';
import { useStoreWithEqualityFn } from 'zustand/traditional';

export const createBoundedUseStore = (store => (selector, equals) =>
  useStoreWithEqualityFn(store, selector as never, equals)) as <
  S extends StoreApi<unknown>
>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(
    selector: (state: ExtractState<S>) => T,
    equals?: (a: T, b: T) => boolean
  ): T;
};

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;
