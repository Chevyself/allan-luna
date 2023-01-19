<svelte:head>
    <title>Allan Luna</title>
</svelte:head>

<script lang="ts">
    import Divider from '../components/Divider.svelte';
    import Work from '../components/Work.svelte';

    let works = [{
        name: '1',
        description: 'Test',
        image: '/images/ph-1.jfif'
    },
    {
        name: '2',
        description: 'Test'
    },
    {
        name: '3',
        description: 'Test',
        image: '/images/ph-2.jpg'
    }];
</script>

<style lang="scss">
    @import '../styles/sections.scss';
    // Make #landing content padding responsive and bigger in bigger displays
    #landing {
        padding: 15rem 0;
        height: 100vh;
    }
</style>

<div class="view-parent">
    <section id="landing">
        <div class="container-fluid h-100 p-5">
            <div class="row h-100">
                <div class="col-12 col
                    -md-6 d-flex flex-column justify-content-center">
                    <h1 class="display-1">Allan Luna</h1>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cumque facere. Non, incidunt velit. Amet labore harum, recusandae saepe beatae nobis.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="works">
        {#each works as work}
            <Work name={work.name} description={work.description} full={true} image={work.image}/>
        {/each}
    </section>
</div>