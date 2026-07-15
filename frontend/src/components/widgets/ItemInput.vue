<script setup lang="ts">
</script>
<template>    
    <section class="mx-auto max-w-md space-y-4 border border-gray-300 bg-gray-100 p-6 rounded-none lg:max-w-full lg:flex lg:items-end lg:gap-4 lg:space-y-0">
        
        <div class="flex-1">
            <label class="block text-sm font-medium text-gray-900" for="item-name">
                Item Name
            </label>
            <input
                id="item-name"
                type="text"
                class="mt-1 block w-full resize-none bg-white p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none rounded-none"
                placeholder="Enter the name of the item to be tracked"
                v-model="itemName"
            />
        </div>

        <div class="flex-1">
            <label class="block text-sm font-medium text-gray-900" for="expiry-date">
                Expiry Date
            </label>
            <div class="mt-1">
                <VueDatePicker
                    id="expiry-date"
                    class="w-full bg-white border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none rounded-none"
                    :enable-time-picker="false"
                    :min-date="new Date()"
                    :max-date=tenYears
                    :flow="flow"
                    now-button-label="Today"
                    v-model="expiryDate"
                />
            </div>
        </div>

        <button
            type="button"
            class="block w-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 rounded-lg lg:h-[50px] lg:w-auto lg:shrink-0"
            @click="addItem"
            >
            Add Item
        </button>        
    </section>
</template>
<style></style>