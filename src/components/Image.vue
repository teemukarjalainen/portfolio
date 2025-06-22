<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    // Define fallback image URL (from public folder)
    const fallback = '/fallback-image.jpg';

    // Use import.meta.glob to map all jpgs in assets folder
    const images = import.meta.glob('../assets/*.jpg');

    const picture = ref<string>(fallback);

    const imagePath = '../assets/my-photo.jpg';

    onMounted(async () => {
        if (images[imagePath]) {
            try {
                // Tell TypeScript the module has a 'default' string export (the image URL)
                const mod = (await images[imagePath]()) as { default: string };
                picture.value = mod.default;
            } catch {
                picture.value = fallback;
            }
        } else {
            picture.value = fallback;
        }
    });
</script>

<template>
    <img :src="picture" alt="My Photo" class="avatar" />
</template>
