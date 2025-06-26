import { config } from '@vue/test-utils';

// 全局配置
config.global.mocks = {
  $t: (msg) => msg // 模拟i18n
};

// 其他全局设置...