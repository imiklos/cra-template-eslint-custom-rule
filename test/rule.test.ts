import { ESLintUtils } from '@typescript-eslint/utils';
import { fooBarRule } from '../src/rules/my-first-rule';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

const validCase1 = { code: 'let fooBar = 5' };
const validCase2 = { code: 'let notfoo = 5' };

const fooBarErrors: { messageId: 'fooBar' }[] = [
  {
    messageId: 'fooBar',
  },
];

const invalidCase1 = {
  code: 'let foo = 5',
  errors: fooBarErrors,
  output: 'let fooBar = 5',
};

const invalidCase2 = {
  code: 'const foo = 5',
  errors: fooBarErrors,
  output: 'const fooBar = 5',
};

ruleTester.run('foo-bar-rule', fooBarRule, {
  valid: [validCase1, validCase2],
  invalid: [invalidCase1, invalidCase2],
});
