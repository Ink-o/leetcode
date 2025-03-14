import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 0, // 覆盖 no-console
    'no-unused-vars': 0, // 允许声明未使用的变量
    'unused-imports/no-unused-vars': 0,
    'no-var': 0, // 允许使用 var
    'no-redeclare': 0, // 允许声明相同变量名
    'no-undef': 0, // 允许使用未声明变量
    'no-empty': 0, // 允许空块
    'no-prototype-builtins': 0, // 允许使用 Object 原型方法
    'vars-on-top': 0, // var 声明变量必须在顶部
    'no-self-compare': 0, // 允许自身比较
    'no-unmodified-loop-condition': 0, // for 循环允许使用块级作用域外的变量
    'jsdoc/require-returns-description': 0, // jsdoc 规范关闭
  },
})
