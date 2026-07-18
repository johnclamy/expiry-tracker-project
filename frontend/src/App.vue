<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from './components/layout/Header.vue'
</script>

<template>
    <!-- min-h-screen ensures the background spans the entire vertical viewport -->
    <div class="bg-slate-50 text-slate-900 min-h-screen antialiased">
        <Header />
        <div class="mx-2">
            <main class="bg-white mt-2 mb-8 mx-auto max-w-5xl px-2 py-2 sm:px-6 lg:px-8">
                <RouterView />
            </main>
        </div>
        <footer>
        <!-- credit for logo icon image -->
        <!-- <a href="https://www.flaticon.com/free-icons/time-tracking" title="time tracking icons">Time tracking icons created by vectorsmarket15 - Flaticon</a> -->
        </footer>
    </div>
</template>

<style scoped></style>

