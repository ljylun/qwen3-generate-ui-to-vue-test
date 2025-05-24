<template>
  <section class="news-section">
    <div class="container">
      <div class="news-grid">
        <div class="news-highlight">
          <div class="news-highlight-content">
            <h3 style="font-size: 20px; margin-bottom: 10px;">走进"自贸试验港"</h3>
            <p>探索自由贸易区的发展机遇与未来规划</p>
          </div>
        </div>
        <div class="news-list">
          <h3 style="color: #2c5aa0; margin-bottom: 20px;">新闻资讯 <span style="float: right; font-size: 14px;">更多</span></h3>
          <div class="news-item" v-for="(news, index) in newsList" :key="index">
            <div class="news-date">{{ news.date }}</div>
            <div>{{ news.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    newsList: Array
  }
};
</script>

<style scoped>
/* News Section Styles */
.news-section {
  padding: 60px 0;
  background: white;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.news-highlight {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
}

.news-highlight-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 30px;
}

.news-list {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
}

.news-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
  transition: all 0.3s;
}

.news-item:hover {
  background: white;
  margin: 0 -15px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
}

.news-date {
  background: #2c5aa0;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
}
</style>