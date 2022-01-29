import { ESLintUtils } from '@typescript-eslint/utils';
import { fooBarRule } from '../src/rules/my-first-rule';
import type { InvalidCaseErrorType, InvalidCaseWithoutError } from '../src/types'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

const validCase1 = { code: 'let fooBar = 5' };
const validCase2 = { code: 'let notfoo = 5' };

const fooBarErrors: InvalidCaseErrorType<'fooBar'> = {
  errors: [
    {
      messageId: 'fooBar',
    },
  ],
};

const fooBarInvalidCaseGenerator = (invalidCase: InvalidCaseWithoutError) =>
  Object.assign(fooBarErrors, invalidCase);

const invalidCase1 = fooBarInvalidCaseGenerator({
  code: 'let foo = 5',
  output: 'let fooBar = 5',
});

const invalidCase2 = fooBarInvalidCaseGenerator({
  code: 'const foo = 5',
  output: 'const fooBar = 5',
});

ruleTester.run('foo-bar-rule', fooBarRule, {
  valid: [validCase1, validCase2],
  invalid: [invalidCase1, invalidCase2],
});
