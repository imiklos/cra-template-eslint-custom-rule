import { Rule } from 'eslint';

export const fooBarRule: Rule.RuleModule = {
  meta: {
    fixable: 'code',
    docs: {
      description: `Variable name 'foo' should be followed by 'Bar'`,
      recommended: true,
    },
    schema: [],
    messages: {
      fooBar: `Variable name 'foo' should be followed by 'Bar'`,
    },
    type: 'problem',
  },
  create: (context) => ({
    VariableDeclarator(node) {
      if (node.id.type === 'Identifier' && node.id.name === 'foo') {
        context.report({
          messageId: 'fooBar',
          node: node.id,
          fix: (fixer) => fixer.insertTextAfter(node.id, 'Bar'),
        });
      }
    },
  }),
};
