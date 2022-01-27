import { ESLintUtils } from '@typescript-eslint/utils';
import { rule as myFirstRule } from '../src/rules/my-first-rule';
import type {InvalidTestCaseWithDefaultOptions} from '../src/types'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

const invalidCase1: InvalidTestCaseWithDefaultOptions<'fooBar'> = {
  code: 'let foo = 5',
  errors: [
    {
      messageId: 'fooBar',
    },
  ],
  output: 'let fooBar = 5',
};

ruleTester.run('my-typed-rule', myFirstRule, {
  valid: [{ code: 'let fooBar = 5' }],
  invalid: [invalidCase1],
});
