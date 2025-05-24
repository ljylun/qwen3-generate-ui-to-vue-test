<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav-menu">
        <li v-for="(item, index) in navItems" :key="index">
          <a 
            href="#"
            class="nav-item"
            @click.prevent="setActiveSection(item.id)"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    activeSection: String,
    setActiveSection: Function,
    navItems: Array
  }
};
</script>

<style scoped>
/* Navigation Styles */
.nav {
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 0;
  backdrop-filter: blur(10px);
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
}

.nav-item {
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s;
}

.nav-item:hover {
  background: #2c5aa0;
  color: white;
  transform: translateY(-2px);
}
</style>