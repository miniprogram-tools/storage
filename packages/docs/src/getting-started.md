# 快速开始

## 安装

```bash
npm add @miniprogram-util/storage
```

# 基础用法

## 创建公共实例

```js {2,5-6,8}
import { createStorage, wxAdapter } from '@miniprogram-util/storage';

// 创建存储实例
const storage = createStorage({ adapter: wxAdapter });

// 存储数据
storage.setItem('name', 'John');

// 读取数据
const name = storage.getItem('name');

// 设置带过期时间的数据（5秒后过期）
storage.setItem('token', 'xxx', 5000);
```

## 创建独立数据空间的实例

```js {1,3-4,12}
import { createStorage } from '@miniprogram-util/storage';

const settingsStorage = createStorage({ id: 'settings', adapter: wxAdapter });

settingsStorage.setItem('key,'value');

settingsStorage.getItem('key');
```

## 创建带前缀的实例

```js
const userStorage = createStorage({ prefix: 'user', adapter: wxAdapter });


userStorage.setItem('key,'value');

userStorage.getItem('key');

```

## 使用全局缓存

```js
const storage = createStorage({ adapter: wxAdapter });

storage.cache.set('key', 'value');

storage.cache.get('key', 'value');
```
