import { createApp, h } from 'vue'
import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import StorybookRoot from './Storybook.vue'

export const createStorybook = opts => new Storybook(opts)

class Storybook {
  constructor({ title }) {
    this.sections = []
    this.site = {
      title
    }
  }

  open(target) {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: '/:pathMatch(.*)*',
          component: StorybookRoot,
          props: {
            sections: this.sections.map(section => section.toObject()),
            site: this.site
          }
        }
      ]
    })

    const vm = createApp({
      render: () => h(RouterView)
    })
      .use(router)
      .mount(target)

    return this
  }

  addSection(opts) {
    const section = new Section(opts)
    this.sections.push(section)
    return section
  }
}

class Section {
  constructor({ title }) {
    this.title = title
    this.stories = []
  }

  addStory(story) {
    this.stories.push(story)
    return this
  }

  toObject() {
    return {
      title: this.title,
      stories: this.stories
    }
  }
}
