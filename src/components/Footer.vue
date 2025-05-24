<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于我们</h3>
          <ul>
            <li><a href="#">自贸区简介</a></li>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">组织架构</a></li>
            <li><a href="#">联系方式</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>投资服务</h3>
          <ul>
            <li><a href="#">投资政策</a></li>
            <li><a href="#">招商项目</a></li>
            <li><a href="#">服务指南</a></li>
            <li><a href="#">在线申请</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>新闻中心</h3>
          <ul>
            <li><a href="#">最新动态</a></li>
            <li><a href="#">政策解读</a></li>
            <li><a href="#">媒体报道</a></li>
            <li><a href="#">通知公告</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>互动交流</h3>
          <ul>
            <li><a href="#">在线咨询</a></li>
            <li><a href="#">意见建议</a></li>
            <li><a href="#">问题反馈</a></li>
            <li><a href="#">服务评价</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 尼日利亚阿克瓦伊博姆州自由贸易区. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // 没有props和逻辑，所以不需要script部分
};
</script>

<style scoped>
/* Footer Styles */
.footer {
  background: #2c5aa0;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  margin-bottom: 20px;
  color: #4a7bc8;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #4a7bc8;
}

.footer-bottom {
  border-top: 1px solid #4a7bc8;
  padding-top: 20px;
  text-align: center;
}
</style>