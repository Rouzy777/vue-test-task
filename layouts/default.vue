<template>
    <div>
        <Navbar/>
        <main class="mt-3 container">
            <nuxt/>
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>
