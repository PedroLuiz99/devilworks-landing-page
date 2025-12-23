<template>
  <div class="container">
    <div class="background">
      <div class="right-gradient"></div>
      <div class="ps2-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
        <div class="orb orb-5"></div>
        <div class="orb orb-6"></div>
        <div class="orb orb-7"></div>
      </div>
    </div>

    <main class="content">
      <header class="header">
        <div class="logo-section">
          <div class="logo">⚡</div>
          <h1 class="domain">{{ t('brand.name') }}</h1>
        </div>
        <div class="language-switcher">
          <button 
            @click="switchLocale('en')" 
            :class="['lang-btn', { active: locale === 'en' }]"
            :title="'English'"
          >
            EN
          </button>
          <button 
            @click="switchLocale('pt-BR')" 
            :class="['lang-btn', { active: locale === 'pt-BR' }]"
            :title="'Português'"
          >
            PT
          </button>
        </div>
      </header>

      <!-- Hero section -->
      <section class="hero">
        <div class="hero-content">
          <h2 class="welcome-title">
            <span class="gradient-text">{{ t('hero.welcome') }}</span>
            <span class="emoji-normal"> {{ t('hero.welcomeEmoji') }}</span>
          </h2>

          <div class="message-box">
            <p class="ironic-message">
              <i18n-t keypath="hero.message">
                <template #magnificentSpace>
                  <span class="highlight">{{ t('hero.magnificentSpace') }}</span>
                </template>
                <template #nothingImportant>
                  <span class="highlight">{{ t('hero.nothingImportant') }}</span>
                </template>
              </i18n-t>
            </p>
            <p class="subtitle">
              {{ t('hero.subtitle') }}
            </p>
          </div>

          <div class="description">
            <p>
              {{ t('hero.description.line1') }}
              <br />
              {{ t('hero.description.line2') }}
              <br />
              <i18n-t keypath="hero.description.line3">
                <template #nothing>
                  <span class="spark">{{ t('hero.description.nothing') }}</span>
                </template>
              </i18n-t>
            </p>
          </div>

          <div class="footer-message">
            <p>
              <em>{{ t('hero.thanks') }}</em>
            </p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p class="copyright">{{ t('footer.copyright', { year: currentYear }) }}</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const scrollY = ref(0)
const currentYear = computed(() => new Date().getFullYear())

const switchLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('preferred-locale', newLocale)
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
  
  const savedLocale = localStorage.getItem('preferred-locale')
  if (savedLocale && (savedLocale === 'en' || savedLocale === 'pt-BR')) {
    locale.value = savedLocale
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  color: #e4e4e7;
  position: relative;
  overflow-x: hidden;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.right-gradient {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  height: 90%;
  background: radial-gradient(ellipse at bottom right, rgba(0, 102, 204, 0.35) 0%, rgba(0, 102, 204, 0) 70%);
  pointer-events: none;
}

.ps2-orbs {
  position: absolute;
  top:30%;
  left: 100px;
  width: 300px;
  height: 300px;
  transform: translateY(-50%);
  transform-origin: center;
  animation: spin-container 6s linear infinite;
}

.orb {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: blur(8px);
  opacity: 1;
  top: 50%;
  left: 50%;
  margin: -20px 0 0 -20px;
  box-shadow: 0 0 20px rgba(94, 179, 255, 0.8), 0 0 40px rgba(94, 179, 255, 0.6), 0 0 60px rgba(94, 179, 255, 0.4);
}

.orb-1 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0066cc 100%);
  transform: translateX(120px);
}

.orb-2 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0080ff 100%);
  transform: rotate(51.43deg) translateX(120px);
}

.orb-3 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0066cc 100%);
  transform: rotate(102.86deg) translateX(120px);
}

.orb-4 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0080ff 100%);
  transform: rotate(154.29deg) translateX(120px);
}

.orb-5 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0066cc 100%);
  transform: rotate(205.71deg) translateX(120px);
}

.orb-6 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0080ff 100%);
  transform: rotate(257.14deg) translateX(120px);
}

.orb-7 {
  background: radial-gradient(circle, #ffffff 0%, #5eb3ff 50%, #0066cc 100%);
  transform: rotate(308.57deg) translateX(120px);
}

@keyframes spin-container {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -40px) scale(1.05);
  }
  66% {
    transform: translate(-40px, 30px) scale(0.95);
  }
}

/* Content */
.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
}

.header {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo {
  font-size: 32px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.domain {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #5eb3ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.language-switcher {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: center;
}

.lang-btn {
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(94, 179, 255, 0.3);
  border-radius: 8px;
  color: #5eb3ff;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.lang-btn:hover {
  background: rgba(74, 158, 255, 0.2);
  border-color: rgba(94, 179, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(94, 179, 255, 0.2);
}

.lang-btn.active {
  background: linear-gradient(135deg, #5eb3ff 0%, #0066cc 100%);
  border-color: #0066cc;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(94, 179, 255, 0.3);
}

.hero {
  text-align: center;
  max-width: 700px;
  margin-top: 60px;
}

.hero-content {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 40px;
  letter-spacing: -1px;
}

.welcome-title .gradient-text {
  background: linear-gradient(135deg, #e4e4e7 0%, #5eb3ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-title .emoji-normal {
  /* Emoji keeps its natural colors */
}

.message-box {
  background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 102, 204, 0.05) 100%);
  border: 1px solid rgba(94, 179, 255, 0.3);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-out 0.2s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.ironic-message {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 500;
}

.highlight {
  color: #5eb3ff;
  font-weight: 700;
}

.subtitle {
  font-size: 16px;
  color: #a1a1aa;
  font-style: italic;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #d4d4d8;
  animation: fadeIn 1s ease-out 0.4s both;
}

.spark {
  color: #0066cc;
  font-weight: 600;
}

.footer-message {
  font-size: 18px;
  color: #5eb3ff;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-out 0.6s both;
}

.emoji {
  font-size: 24px;
  margin: 0 8px;
  display: inline-block;
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.95), transparent);
  padding: 40px 20px 20px;
  text-align: center;
  z-index: 5;
}

.copyright {
  font-size: 12px;
  color: #71717a;
  margin-top: 10px;
}
@media (max-width: 768px) {
  .welcome-title {
    font-size: 36px;
  }

  .message-box {
    padding: 30px 20px;
  }

  .ironic-message {
    font-size: 16px;
  }

  .domain {
    font-size: 20px;
  }

  .footer {
    padding: 30px 15px 15px;
  }

  .content {
    padding: 40px 15px;
  }
}

@media (max-width: 480px) {
  .header {
    top: 20px;
  }

  .welcome-title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .message-box {
    padding: 20px 15px;
    margin-bottom: 30px;
  }

  .ironic-message {
    font-size: 14px;
  }

  .description {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .logo {
    font-size: 24px;
  }

  .logo-section {
    gap: 8px;
  }

  .domain {
    font-size: 18px;
  }

  .social-links {
    gap: 15px;
  }

  .social-link {
    width: 35px;
    height: 35px;
  }

  .copyright {
    font-size: 11px;
  }
}
</style>
