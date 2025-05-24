<template>
  <section class="action-sections">
    <div class="action-card blue">
      <h3 class="action-title">自贸试验区简介</h3>
      <a href="#" class="action-btn">查看</a>
    </div>
    <div class="action-card green">
      <h3 class="action-title">政策法规</h3>
      <a href="#" class="action-btn">查看</a>
    </div>
    <div class="action-card orange">
      <h3 class="action-title">联系我们</h3>
      <a href="#" class="action-btn">查看</a>
    </div>
  </section>
</template>

<script>
export default {
  // 没有props和逻辑，所以不需要script部分
};
</script>

<style scoped>
/* Action Sections Styles */
.action-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0;
}

.action-card {
  padding: 80px 40px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  background-size: cover;
  background-position: center;
}

.action-card:hover {
  transform: scale(1.02);
}

.action-card.blue {
  background-image: linear-gradient(135deg, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url('https://picsum.photos/seed/port/800/600');
}

.action-card.green {
  background-image: linear-gradient(135deg, rgba(86, 171, 47, 0.7), rgba(168, 230, 207, 0.7)), url('https://picsum.photos/seed/law/800/600');
}

.action-card.orange {
  background-image: linear-gradient(135deg, rgba(240, 147, 251, 0.7), rgba(245, 87, 108, 0.7)), url('https://picsum.photos/seed/contact/800/600');
}

.action-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.action-btn {
  padding: 12px 30px;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.action-btn:hover {
  background: white;
  color: #333;
  transform: translateY(-2px);
}
</style>