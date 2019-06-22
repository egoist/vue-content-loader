import Vue from 'vue'
import Router from 'vue-router'
import StorybookRoot from './Storybook.vue'

Vue.use(Router)

export const createStorybook = opts => new Storybook(opts)

class Storybook {
  constructor({ title }) {
    this.sections = []
    this.site = {
      title
    }
  }

  open(target) {
    const router = new Router({
      mode: 'history',
      routes: [{
        path: '*',
        component: StorybookRoot,
        props: {
          sections: this.sections.map(section => section.toObject()),
          site: this.site
        }
      }]
    })

    const vm = new Vue({
      router,
      render: h => h('router-view')
    })

    vm.$mount(target)

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
