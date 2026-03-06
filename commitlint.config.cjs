/**
 * Commitlint 配置：基于 conventional commits。
 * 说明：
 * 1. 通过 extends 继承 @commitlint/config-conventional 的默认规则。
 * 2. 通过 rules 明确限制允许的 type，保证提交信息可用于语义化发布生态。
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 明确允许的提交类型。
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'chore', 'test']],
    // 保持 type 必填，避免出现纯描述且无前缀的提交信息。
    'type-empty': [2, 'never'],
    // 保持 subject 必填，确保提交信息表达具体改动。
    'subject-empty': [2, 'never'],
  },
};
