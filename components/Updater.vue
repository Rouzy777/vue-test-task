<template>
    <a v-if='isLink' href="#">
        Обновить (ссылка)
    </a>
    <span v-else class='btn btn-primary'>
        Обновить
    </span>
</template>

<script>
    export default {
        name: 'Updater',
        props: {
            isLink: Boolean
        }
    }
</script>
