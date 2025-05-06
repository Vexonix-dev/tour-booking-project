<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    @click.self="close"
  >
    <div class="bg-zinc-900 text-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 relative">
      <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">×</button>
      <h2 class="text-2xl sm:text-3xl font-bold text-violet-500 text-center mb-6">Регистрация</h2>

      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            class="w-full border border-zinc-700 bg-zinc-800 text-white rounded-lg px-4 py-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="Введите email"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Пароль</label>
          <input
            type="password"
            class="w-full border border-zinc-700 bg-zinc-800 text-white rounded-lg px-4 py-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="Придумайте пароль"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Повторите пароль</label>
          <input
            type="password"
            class="w-full border border-zinc-700 bg-zinc-800 text-white rounded-lg px-4 py-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="Повторите пароль"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Зарегистрироваться
        </button>
      </form>

      <p class="text-center text-sm text-gray-400 mt-4">
        Уже есть аккаунт?
        <router-link to="/" class="text-violet-500 hover:underline">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const close = () => router.push({ query: {} })
</script>