<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">特色专区</h2>
      <div class="feature-grid">
        <div 
          class="feature-card fade-in-up" 
          v-for="(feature, index) in features" 
          :key="index" 
          @click="viewFeature(feature)"
        >
          <div class="feature-image" :class="feature.imageClass"></div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    features: Array,
    viewFeature: Function
  }
};
</script>

<style scoped>
/* Feature Cards Styles */
.features {
  padding: 80px 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 28px;
  color: #2c5aa0;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #4a7bc8;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.feature-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-image {
  height: 200px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  position: relative;
}

.feature-image.city1 {
  background: linear-gradient(45deg, #2E8B57, #98FB98);
}

.feature-image.city2 {
  background: linear-gradient(45deg, #CD853F, #F4A460);
}

.feature-image.city3 {
  background: linear-gradient(45deg, #4682B4, #87CEEB);
}

.feature-content {
  padding: 25px;
}

.feature-title {
  font-size: 18px;
  font-weight: bold;
  color: #2c5aa0;
  margin-bottom: 10px;
}
</style>