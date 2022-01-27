import type { InvalidTestCase } from '@typescript-eslint/utils/dist/ts-eslint';

export type InvalidTestCaseWithDefaultOptions<
  TMessageIds extends string
> = InvalidTestCase<TMessageIds, []>;
