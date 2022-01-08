import { Button, Icon, Popup } from 'vant'

const plugins = [Button, Icon, Popup]

export const vantPlugins = {
  install: function (vm) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}