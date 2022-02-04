import type { Rule } from 'eslint';

export const fooBarRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: `Variable name 'foo' should be followed by 'Bar'`,
      recommended: true,
    },
    messages: {
      fooBar: `Variable name 'foo' should be followed by 'Bar'`,
    },
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
};
