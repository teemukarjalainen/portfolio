<script setup lang="ts">
    import { useCareer } from '../composables/useCareer';
    import { shortMonthAndYearOnly } from '../utils/DateUtils';
    import '../styles/_cards.css';

    const { career } = useCareer();
</script>

<template>
    <div class="career-tree">
        <div class="line"></div>
        <div class="mound-label">1994</div>
        <div class="items">
            <div v-for="item in [...career].reverse()" :key="item.title + item.startDate" class="item">
                <div class="circle"></div>
                <div class="card career-card">
                    <div class="card-content">
                        <h3 class="title">{{ item.title }}</h3>
                        <p class="company">{{ item.company }}</p>
                        <p class="date">
                            {{ shortMonthAndYearOnly(item.startDate) }}
                            {{ item?.startDate && item?.endDate ? ' - ' : '' }}
                            {{ item?.endDate ? shortMonthAndYearOnly(item.endDate) : '' }}
                        </p>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .career-card {
        margin-left: 70px;
        border-left: 6px solid #2f5d50;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: none !important;
        min-width: 80%;
        max-width: 80%;
    }

    .career-card:hover {
        transform: none !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
    }

    .description {
        white-space: pre-line;
    }

    .career-tree {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-bottom: 10%;
    }

    .line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 38px;
        width: 4px;
        background-color: #2f5d50;
        border-radius: 2px;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .item {
        position: relative;
        display: flex;
        align-items: flex-start;
    }

    .circle {
        position: absolute;
        left: 30px;
        top: 8px;
        width: 16px;
        height: 16px;
        background-color: #2f5d50;
        border-radius: 50%;
        border: 3px solid white;
        box-sizing: content-box;
        z-index: 1;
    }

    .circle::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -200%;
        width: 220%;
        height: 4px;
        background-color: #2f5d50;
        transform: translateY(-50%);
        border-radius: 2px;
        z-index: 0;
    }

    /* Top node (small circle at top of trunk) */
    .line::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        background-color: #2f5d50;
        border-radius: 50%;
        z-index: 2;
    }

    /* Bottom mound */
    .line::after {
        content: '';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 32px;
        background: #2f5d50;
        border-radius: 50% / 100%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .mound-label {
        position: absolute;
        bottom: -22px;
        left: 24px;
        color: white;
        font-weight: bold;
        font-size: 0.85rem;
        z-index: 2;
        text-align: center;
        pointer-events: none;
    }
</style>
