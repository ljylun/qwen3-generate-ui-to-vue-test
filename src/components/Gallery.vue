<template>
  <section class="gallery">
    <div class="container">
      <h2 class="section-title">精彩专栏</h2>
      <div class="gallery-grid">
        <div 
          class="gallery-item nature" 
          v-for="(item, index) in galleryItems" 
          :key="index" 
          :class="item.class"
        >
          <div class="gallery-overlay">
            <h4>{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    galleryItems: Array
  }
};
</script>

<style scoped>
/* Gallery Styles */
.gallery {
  padding: 80px 0;
  background: #f8f9fa;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.gallery-item {
  aspect-ratio: 1;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item.nature {
  background: linear-gradient(45deg, #2E8B57, #98FB98);
}

.gallery-item.industry {
  background: linear-gradient(45deg, #FF4500, #FFD700);
}

.gallery-item.port {
  background: linear-gradient(45deg, #4682B4, #87CEEB);
}

.gallery-item.city {
  background: linear-gradient(45deg, #9370DB, #DA70D6);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: all 0.3s;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}
</style>