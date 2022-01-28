import { createRule } from '../utils';

export const fooBarRule = createRule({
  name: 'foo-bar',
  defaultOptions: [],
  meta: {
    fixable: 'code',
    docs: {
      description: `Variable name 'foo' should be followed by 'Bar'`,
      recommended: 'error',
    },
    schema: [],
    messages: {
      fooBar: `Variable name 'foo' should be followed by 'Bar'`,
    },
    type: 'problem',
  },
  create: context => ({
    VariableDeclarator(node) {
      if (node.id.type === 'Identifier' && node.id.name === 'foo') {
        context.report({
          messageId: 'fooBar',
          node: node.id,
          fix: fixer => fixer.insertTextAfter(node.id, 'Bar'),
        });
      }
    },
  }),
});
