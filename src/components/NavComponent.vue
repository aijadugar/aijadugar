<template>
  <nav :class="['navbar', theme]">
    <div class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/profiles" class="nav-item">Profiles</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </div>
</nav>
    <button @click="toggleTheme" class="theme-toggle">
      <span v-if="theme === 'dark'">🎩</span>
      <span v-else>🪄</span>
    </button>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.body.className = this.theme;
    }
  },
  mounted() {
    document.body.className = this.theme;
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1000;
  border-radius: 50px;
  width: fit-content;
  max-width: 90%;
}

.dark.navbar {
  background-color: rgba(26, 26, 26, 0.95);
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

.light.navbar {
  background-color: rgba(245, 245, 245, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.dark .nav-item {
  color: #e0e0e0;
}

.light .nav-item {
  color: #2c3e50;
}

.dark .nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
}

.light .nav-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.dark .theme-toggle {
  background-color: #4a4a4a;
  color: #e0e0e0;
}

.light .theme-toggle {
  background-color: #ffffff;
  color: #2c3e50;
}

.dark .theme-toggle:hover {
  background-color: #5a5a5a;
  animation: magicSpin 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.light .theme-toggle:hover {
  background-color: #f0f0f0;
  animation: magicSpin 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

@keyframes magicSpin {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(360deg);
  }
  45% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(360deg);
  }
  90% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>