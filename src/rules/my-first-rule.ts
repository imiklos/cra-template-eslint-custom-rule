import { createRule } from '../utils';

export const rule = createRule({
  meta: {
    fixable: 'code',
    docs: {
      description: `Variable name 'foo' should be followed by 'Bar'`,
      recommended: 'error',
    },
    schema: [],
    messages: {
      fooBar: `Add 'Bar' after 'foo'.`,
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
  name: 'fooBar',
  defaultOptions: [],
});
