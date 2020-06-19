<template>
    <div>
        <Navbar/>
        <main>
            <div class="mt-3 container">
                <nuxt/>
            </div>
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
