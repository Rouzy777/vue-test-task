<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    	<a class="navbar-brand" href="#">Sneakersale Task</a>
    	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    		<span class="navbar-toggler-icon"></span>
    	</button>
    	<div class="collapse navbar-collapse" id="navbarNav">
    		<ul class="navbar-nav">
    			<li v-for='page in routes' :key='page.name' class="nav-item">
                    <nuxt-link active-class='active' class='nav-link' :to='page.link' exact>
		                {{page.name}}
                    </nuxt-link>
    			</li>
    		</ul>
    	</div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        routes: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Some page',
                link: '/smpage'
            }
        ]
    })
}
</script>
