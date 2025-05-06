// src/stores/auth.js
import { ref } from 'vue'

export const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')
export const userRole = ref(localStorage.getItem('userRole') || 'user')

export function login(role = 'user') {
  isAuthenticated.value = true
  userRole.value = role
  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('userRole', role)
}

export function logout() {
  isAuthenticated.value = false
  userRole.value = 'user'
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('userRole')
}