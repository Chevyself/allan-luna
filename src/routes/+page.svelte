<svelte:head>
    <title>Allan Luna</title>
</svelte:head>

<script lang="ts">
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
        background-image: url('/images/allan.png');
        background-repeat: no-repeat;
        // Position it to the left bottom
        background-position: left bottom;
        background-size: 160vh;
        background-attachment: fixed;
        @media screen and (max-width: 767px) {
            // Hide background image
            background-image: none;
        }
    }

    #introduction {
        animation: fadeInUp 1.7s;
    }

    
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>

<div class="view-parent">
    <section id="landing" class="view">
        <div id="introduction" class="container-fluid h-100 p-5">
            <div class="row h-100">
                <div class="col-12 col-md-6 offset-md-6 d-flex flex-column justify-content-center">
                    <h1 class="display-1">Retratos</h1>
                    <h4>Allan Luna</h4>
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