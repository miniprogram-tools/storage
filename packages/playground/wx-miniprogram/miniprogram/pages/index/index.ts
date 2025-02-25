import { createStorage, wxAdapter } from '@miniprogram-tools/storage';

// 创建默认存储实例
const storage = createStorage({ adapter: wxAdapter });

// 创建带前缀的存储实例
const userStorage = createStorage({ prefix: 'user', adapter: wxAdapter });

// 创建隔离的存储实例
const settingsStorage = createStorage({ id: 'settings', adapter: wxAdapter });

Page({
    data: {
        value: '',
        result: '',
    },

    onLoad() {
        // 示例：设置带过期时间的数据
        storage.setItem('test', 'hello world', 5000); // 5秒后过期
        // 示例：设置用户数据
        userStorage.setItem('name', 'John');
        userStorage.setItem('age', 25);

        // 示例：设置设置数据
        settingsStorage.setItem('theme', 'dark');
        settingsStorage.setItem('language', 'zh');
        settingsStorage.getItem('test');

        setTimeout(() => {
            storage.getItem('test');
        }, 6000);
    },

    handleInput(e: WechatMiniprogram.Input) {
        this.setData({
            value: e.detail.value,
        });
    },

    handleSave() {
        const { value } = this.data;
        storage.setItem('input', value);
        this.setData({
            result: '保存成功',
        });
    },

    handleLoad() {
        const value = storage.getItem<string>('input');
        this.setData({
            result: value || '未找到数据',
        });
    },

    handleClear() {
        storage.clear((key: string) => key.startsWith('input'));
        this.setData({
            result: '已清除',
        });
    },
});
