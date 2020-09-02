import Vue from 'vue'
import VxCard from './components/vx-card/VxCard.vue'
import VxTooltip from './layouts/components/vx-tooltip/VxTooltip.vue'
//import VxList from './components/vx-list/VxList.vue'
import VxBreadcrumb from './layouts/components/VxBreadcrumb.vue'
import FeatherIcon from './components/FeatherIcon.vue'

Vue.component(VxCard.name, VxCard)
Vue.component(VxTooltip.name, VxTooltip)
//Vue.component(VxList.name, VxList)
Vue.component(VxBreadcrumb.name, VxBreadcrumb)
Vue.component(FeatherIcon.name, FeatherIcon)
