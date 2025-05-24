<template>
  <section class="news-section">
    <div class="container">
      <div class="news-grid">
        <div class="news-highlight">
          <div class="carousel-container">
            <div 
              v-for="(image, index) in carouselImages" 
              :key="index" 
              class="carousel-item"
              :style="{ backgroundImage: 'url(' + image.url + ')' }"
            >
              <div class="carousel-caption">{{ image.caption }}</div>
            </div>
          </div>
        </div>
        <div class="news-list">
          <h3 style="color: #2c5aa0; margin-bottom: 20px;">新闻资讯 <span style="float: right; font-size: 14px;">更多</span></h3>
          <div class="news-item" v-for="(news, index) in newsList" :key="index">
            <div class="news-date">{{ news.date }}</div>
            <a :href="news.url" target="_blank">{{ news.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        { url: 'https://picsum.photos/seed/freeport1/800/400', caption: '自贸试验区1' },
        { url: 'https://picsum.photos/seed/freeport2/800/400', caption: '自贸试验区2' },
        { url: 'https://picsum.photos/seed/freeport3/800/400', caption: '自贸试验区3' },
        { url: 'https://picsum.photos/seed/freeport4/800/400', caption: '自贸试验区4' },
        { url: 'https://picsum.photos/seed/freeport5/800/400', caption: '自贸试验区5' }
      ],
      newsList: []
    };
  },
  mounted() {
    fetch('https://v.api.aa1.cn/api/zhihu-news/')
      .then(response => response.json())
      .then(data => {
        const formattedDate = data.date.replace(/(\\d{4})(\\d{2})(\\d{2})/, '$1-$2-$3');
        this.newsList = data.news.map(item => ({
          title: item.title,
          url: item.url,
          date: formattedDate
        }));
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item:nth-child(1) { animation: fade 15s infinite; }
.carousel-item:nth-child(2) { animation: fade 15s 3s infinite; }
.carousel-item:nth-child(3) { animation: fade 15s 6s infinite; }
.carousel-item:nth-child(4) { animation: fade 15s 9s infinite; }
.carousel-item:nth-child(5) { animation: fade 15s 12s infinite; }

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

@keyframes fade {
  0% { opacity: 0; }
  20% { opacity: 1; }
  40% { opacity: 1; }
  60% { opacity: 0; }
  100% { opacity: 0; }
}

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