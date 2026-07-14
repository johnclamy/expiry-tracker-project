<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import pageLink from '../../routes/page-link.ts'
</script>

<template>
    <header class="bg-slate-50">
        <div class="bg-white mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- logo section -->
                <section class="md:flex md:items-center md:gap-12">
                    <RouterLink class="block text-teal-600" :to="pageLink.HOME">
                        <span class="sr-only">Home</span>
                        <img class="h-8 w-auto object-contain" src="../../assets/logo.png" alt="logo" />
                    </RouterLink>
                </section>
                <!-- navigation section -->
                <section class="hidden md:block">
                    <nav aria-label="Global">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <RouterLink class="text-gray-500 transition hover:text-gray-500/75" :to="pageLink.HOME"> Home </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="text-gray-500 transition hover:text-gray-500/75" :to="pageLink.ABOUT"> About </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </section>
                <!-- Login/ Register section -->
                <section class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <a class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="#">
                            Login
                        </a>
                        <div class="hidden sm:flex">
                            <a class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="#">
                                Register
                            </a>
                        </div>
                    </div>
                    <!-- Hamburger menu -->
                    <div class="block md:hidden">
                        <button class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <span class="sr-only">Toggle menu</span>
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </header>
</template>
