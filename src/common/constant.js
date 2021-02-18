// 常量

/**
 * 资源地址
 */
export const defaultAvatarUrl = '/static/avatar_default.png'

/**
 * 用户信息默认值，对象字段名需要与后台保持一致
 */
export const userInfo = {
  name: '新用户',
  avatar: defaultAvatarUrl,
  email: '',
  nickName: '',
  sex: 'M',
  birthday: '',
  mobile: '',
}

/**
 * 个人资料 - 性别选项数据 value与后台保持一致
 */
export const genderList = [
  { label: '男', value: 'M' },
  { label: '女', value: 'F' },
  { label: '未知', value: 'N' },
]
