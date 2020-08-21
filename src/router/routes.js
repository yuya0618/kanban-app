import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  components: KbnBoardView,
  meta: { requiresAuth: true }
}, {
  path: '/login',
  components: KbnLoginView
}, {
  path: 'tasks/:id',
  components: KbnTaskDetailModal,
  meta: { requiresAuth: true }
}, {
  path: '*',
  redirect: '/'
}]