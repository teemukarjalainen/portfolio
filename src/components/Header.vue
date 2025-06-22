<script setup lang="ts">
    import Image from './Image.vue';
    const name: string = 'Teemu Karjalainen';
    const title: string = 'Versatile Software Engineer';
    const slogan: string = 'From game loops to memory leaks, I’ve shipped code that matters.';
    const linkedin: string = 'https://linkedin.com/in/teekarjalainen';
</script>

<template>
    <header class="header">
        <div class="header-content">
            <div class="profile-section">
                <div class="profile">
                    <Image />
                    <div class="text">
                        <h1>{{ name }}</h1>
                        <h2>{{ title }}</h2>
                        <a :href="linkedin" target="_blank" rel="noopener">LinkedIn: in/TeeKarjalainen</a>
                    </div>
                </div>
            </div>
            <div class="slogan-section">
                <div class="slogan">{{ slogan }}</div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .header {
        position: relative;
        width: 100% !important;
        background-color: #2f5d50;
        color: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 140px; /* Adjust as needed */
    }

    .header-content {
        width: 100%;
        max-width: 75%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.5rem;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .avatar {
        width: 90px;
        height: 90px;
        min-width: 90px;
        min-height: 90px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .text h1 {
        font-size: 1.3rem;
        margin: 0;
    }

    .text h2 {
        font-size: 0.95rem;
        margin: 0.25rem 0;
        opacity: 0.85;
    }

    .text a {
        font-size: 0.85rem;
        color: #c9f5df;
        font-weight: bold;
        text-decoration: none;
    }

    .slogan {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.2rem;
        font-style: italic;
        font-weight: bold;
        white-space: nowrap;
        pointer-events: none;
        z-index: 1;
        text-align: center;
    }

    /* Mobile responsiveness */
    @media (max-width: 1780px) {
        .header {
            padding: 1rem;
            min-height: auto;
        }

        .header-content {
            flex-direction: column;
            align-items: center;
        }

        .slogan {
            position: static;
            transform: none;
            white-space: normal;
            margin-top: 0.75rem;
            pointer-events: auto;
        }

        .profile {
            flex-direction: column;
        }
    }
</style>
