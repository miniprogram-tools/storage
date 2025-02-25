# Miniprogram Utils

一个为小程序设计的工具库集合，提供了增强的存储功能等实用工具。

## 特性

### Storage 增强版存储

- 🚀 内置缓存层，提高读取性能
- ⏰ 支持数据过期机制
- 🔒 支持数据空间隔离
- 🎯 完整的 TypeScript 支持
- 🎨 支持前缀隔离不同模块的数据

## 安装

```bash
npm add @miniprogram-tools/storage
```

## 使用示例

### 基础用法

```typescript
import { createStorage, wxAdapter } from '@miniprogram-tools/storage';

// 创建存储实例
const storage = createStorage({ adapter: wxAdapter });

// 存储数据
storage.setItem('name', 'John');

// 读取数据
const name = storage.getItem<string>('name');

// 设置带过期时间的数据（5秒后过期）
storage.setItem('token', 'xxx', 5000);
```

### 数据隔离

```typescript
// 使用前缀隔离数据
const userStorage = createStorage({
    adapter: wxAdapter,
    prefix: 'user',
});

// 使用独立数据空间
const settingsStorage = createStorage({
    adapter: wxAdapter,
    id: 'settings',
});
```

### 缓存使用

```typescript
const storage = createStorage({ adapter: wxAdapter });

// 使用缓存
storage.cache.set('key', 'value');
storage.cache.get('key');
```
