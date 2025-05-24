<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-section">
          <div class="logo"></div>
          <div class="site-title">尼日利亚阿克瓦伊博姆州自由贸易区<br>Akwa Ibom State Free Trade Zone in Nigeria</div>
        </div>
        <div class="search-section">
          <div class="lang-switch">
            <button class="lang-btn" :class="{active: currentLang === 'zh'}" @click="switchLang('zh')">中</button>
            <button class="lang-btn" :class="{active: currentLang === 'en'}" @click="switchLang('en')">英</button>
          </div>
          <input type="text" class="search-box" placeholder="请输入关键字">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    currentLang: String,
    switchLang: Function
  }
};
</script>

<style scoped>
        /* Header Styles */
        .header {
            background: linear-gradient(135deg, #2c5aa0, #4a7bc8);
            color: white;
            padding: 15px 0;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo {
            width: 50px;
            height: 50px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23fff"/><rect x="20" y="40" width="60" height="20" fill="%23228B22"/><rect x="20" y="30" width="60" height="10" fill="%23fff"/><rect x="20" y="60" width="60" height="10" fill="%23fff"/></svg>') center/cover;
        }

        .site-title {
            font-size: 18px;
            font-weight: bold;
        }

        .search-section {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .search-box {
            padding: 8px 15px;
            border: none;
            border-radius: 20px;
            width: 200px;
        }

        .lang-switch {
            display: flex;
            gap: 10px;
        }

        .lang-btn {
            padding: 5px 10px;
            background: transparent;
            color: white;
            border: 1px solid white;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .lang-btn:hover, .lang-btn.active {
            background: white;
            color: #2c5aa0;
        }
</style>