<template>
  <div>
    <div class="sidebar">
      <div class="sections">
        <div
          class="section"
          v-for="(section, sectionIndex) in sections"
          :key="sectionIndex"
        >
          <div class="section-title">{{ section.title }}</div>
          <div class="stories">
            <router-link
              :to="{ query: { section: section.title, story: story.title } }"
              :class="[
                `story-title`,
                $route.query.story === story.title &&
                  $route.query.section === section.title &&
                  `is-active`,
              ]"
              v-for="(story, storyIndex) in section.stories"
              :key="storyIndex"
              >{{ story.title }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['sections', 'site'],

  computed: {
    current() {
      const { query } = this.$route
      for (const section of this.sections) {
        if (section.title === query.section) {
          for (const story of section.stories) {
            if (story.title === query.story) {
              return {
                section,
                story,
              }
            }
          }
        }
      }
    },

    currentComponent() {
      return this.current?.story.component
    },

    currentTitle() {
      if (this.current) {
        const { story, section } = this.current
        return `${story.title} ${section.title} - - ${this.site.title}`
      }
      return this.site.title
    },
  },

  watch: {
    currentTitle: {
      handler(title) {
        document.title = title
      },
      immediate: true,
    },
  },
}
</script>

<style>
:root {
  --sidebar-width: 240px;
}
</style>

<style scoped>
.sidebar {
  border-right: 1px solid #e2e2e2;
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}

.section:not(:last-child) {
  border-bottom: 1px solid #e2e2e2;
}

.section-title {
  padding: 10px;
  border-bottom: 1px solid #e2e2e2;
}

.story-title {
  display: block;
  padding: 10px;
  color: blue;
  text-decoration: none;
}

.story-title:hover {
  background: #f9f9f9;
}

.story-title.is-active {
  background: #f0f0f0;
}

.main {
  padding: 20px;
  margin-left: var(--sidebar-width);
}
</style>
