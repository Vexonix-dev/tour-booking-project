<template>
  <div class="min-h-screen bg-zinc-900 text-white">
    <!-- Хедер -->
    <header class="flex items-center justify-between px-10 py-5 bg-zinc-800 text-white border-b border-zinc-700">
      <div class="text-2xl font-bold">
        <span>Wan</span><span class="text-violet-500">dra</span>
      </div>

      <nav class="space-x-6 font-medium flex flex-wrap justify-end md:flex">
        <router-link to="/" class="hover:text-violet-400">Главная</router-link>
        <button @click="logout" class="hover:text-violet-400">Выйти</button>
      </nav>
    </header>

    <section class="p-10 max-w-xl mx-auto text-center bg-zinc-800 shadow-xl rounded-xl mt-12 space-y-6">
      <h1 class="text-3xl font-bold text-violet-400">Добро пожаловать, {{ user.name }}!</h1>

      <div class="space-y-1 text-zinc-300">
        <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
        <p><span class="font-semibold">Роль:</span> {{ user.role }}</p>
      </div>

      <div class="mt-8 text-left">
        <h2 class="text-xl font-semibold text-violet-400 mb-2">Забронированные туры</h2>
        <p class="text-zinc-400">У вас пока нет забронированных туров.</p>
      </div>

      <!-- Выход профиль -->
      <button
        @click="logout"
        class="mt-8 px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full shadow-md transition-all duration-200"
      >
        Выйти из аккаунта
      </button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { isAuthenticated } from '@/stores/auth'

const router = useRouter()

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push({ path: '/', query: { modal: 'login' } })
  }
})

const user = reactive({
  name: 'Рубан Никита',
  email: 'ivan@example.com',
  role: 'Пользователь',
})

function logout() {
  localStorage.removeItem('isAuthenticated')
  isAuthenticated.value = false
  router.push('/')
}
</script>