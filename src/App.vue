<template>
  <div id="app">
    <Header 
      :current-lang="currentLang"
      :switch-lang="switchLang"
    />
    <Navigation
      :active-section="activeSection"
      :set-active-section="setActiveSection"
      :nav-items="[
        { id: 'home', label: '首页' },
        { id: 'zone', label: '走进自贸区' },
        { id: 'investment', label: '国际投资政策' },
        { id: 'policy', label: '政策文件' },
        { id: 'guide', label: '办事指南' },
        { id: 'interaction', label: '政民互动' }
      ]"
    />
    <HeroSection />
    <FeatureCards
      :features="features"
      :view-feature="viewFeature"
    />
    <NewsSection
      :news-list="newsList"
    />
    <Gallery
      :gallery-items="galleryItems"
    />
    <ActionSections />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import FeatureCards from './components/FeatureCards.vue';
import NewsSection from './components/NewsSection.vue';
import Gallery from './components/Gallery.vue';
import ActionSections from './components/ActionSections.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Navigation,
    HeroSection,
    FeatureCards,
    NewsSection,
    Gallery,
    ActionSections,
    Footer
  },
  data() {
    return {
      currentLang: 'zh',
      activeSection: 'home',
      features: [
        {
          title: '栏目一',
          description: '探索自贸区的投资机遇和发展前景',
          imageClass: 'city1'
        },
        {
          title: '栏目二',
          description: '了解最新的政策法规和优惠措施',
          imageClass: 'city2'
        },
        {
          title: '栏目三',
          description: '查看园区建设和企业入驻情况',
          imageClass: 'city3'
        }
      ],
      newsList: [
        {
          date: '2024-11-12',
          title: '第六届"多彩贵州"自行车联赛（遵义一一...'
        },
        {
          date: '2024-11-12',
          title: '第六届"多彩贵州"自行车联赛（遵义一一...'
        },
        {
          date: '2024-11-12',
          title: '第六届"多彩贵州"自行车联赛（遵义一一...'
        },
        {
          date: '2024-11-12',
          title: '第六届"多彩贵州"自行车联赛（遵义一一...'
        }
      ],
      galleryItems: [
        { title: '自然风光', class: 'nature' },
        { title: '产业展示', class: 'industry' },
        { title: '港口物流', class: 'port' },
        { title: '城市建设', class: 'city' }
      ]
    };
  },
  methods: {
    switchLang(lang) {
      this.currentLang = lang;
      // 这里可以添加语言切换逻辑
    },
    setActiveSection(section) {
      this.activeSection = section;
      // 这里可以添加页面导航逻辑
    },
    viewFeature(feature) {
      alert(`查看 ${feature.title}`);
      // 这里可以添加跳转到详情页的逻辑
    }
  }
};
</script>

<style>
/* 全局样式保持不变 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>