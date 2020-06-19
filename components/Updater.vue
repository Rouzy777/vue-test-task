<template>
    <a v-if='isLink' href="#">
        Обновить (ссылка)
    </a>
    <div v-else class='btn btn-primary'>
        Обновить
    </div>
</template>

<script>
    export default {
        name: 'Updater',
        props: {
            isLink: Boolean
        }
    }
</script>
