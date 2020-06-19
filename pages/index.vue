<template>
    <div>
        <input class='form-control col-lg-6' type="text" placeholder="Введите любой текст" v-model='text'>
        <Updater :isLink='false' @click.native.prevent='update' class='my-3'/>
        <h4>Полученный текст: {{ textStore }}</h4>
    </div>
</template>

<script>
    import Updater from '@/components/Updater'

    export default {
        data: () => ({
            text: '' //текст в инпуте
        }),
        components: {
            Updater
        },
        computed: { //получаем текущие данные из state
            textStore() {
                return this.$store.state.text
            }
        },
        methods: {
            update() {
                this.$store.commit('setText', this.text) //обновляем state
            }
        }
    }
</script>
