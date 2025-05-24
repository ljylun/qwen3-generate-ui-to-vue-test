<template>
  <section class="hero">
    <div class="container">
      <h1 class="fade-in-up" style="font-size: 3rem; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
        阿克瓦伊博姆州自由贸易区
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // 添加滚动动画效果
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = Math.random() * 0.3 + 's';
            entry.target.classList.add('fade-in-up');
          }
        });
      });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    setTimeout(observeElements, 100);
  }
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  height: 500px;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500"><rect fill="%2387CEEB" width="1200" height="500"/><g fill="%23fff" opacity="0.1"><circle cx="200" cy="100" r="30"/><circle cx="400" cy="150" r="20"/><circle cx="800" cy="80" r="25"/><circle cx="1000" cy="120" r="35"/></g><rect fill="%23228B22" x="0" y="400" width="1200" height="100"/><rect fill="%23654321" x="200" y="200" width="800" height="200"/><rect fill="%23FF6B6B" x="250" y="150" width="100" height="250"/><rect fill="%234ECDC4" x="400" y="180" width="120" height="220"/><rect fill="%23FFE66D" x="600" y="160" width="80" height="240"/><rect fill="%23FF8B94" x="750" y="170" width="90" height="230"/><rect fill="%2395E1D3" x="900" y="140" width="70" height="260"/><path fill="%2387CEEB" d="M0,350 Q300,320 600,350 T1200,350 L1200,400 L0,400 Z"/></svg>') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>