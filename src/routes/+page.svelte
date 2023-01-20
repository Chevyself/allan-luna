<script lang="ts">
    import Work from "../components/Work.svelte";

    let works = [
        {
            name: "1",
            image: "images/1-1.jpg",
        },
        {
            name: "2",
            image: "images/2-2.jpg",
            full: true,
            classes: "full-view",
            shadow: true,
        },
        {
            name: "3",
            image: "images/3-1.jpg",
            left: false
        },
        {
            name: "4",
            image: "images/4.jpg",
        },
        {
            name: "5",
            image: "images/5.jpg",
            left: false
        },
        {
            name: "6",
            image: "images/6.jpg",
        }
    ];
</script>

<svelte:head>
    <title>Allan Luna</title>
</svelte:head>

<div class="view-parent">
    <section id="landing" class="view">
        <div id="introduction" class="container-fluid h-100 p-5">
            <div class="row h-100">
                <div
                    class="col-12 col-md-6 offset-md-6 d-flex flex-column justify-content-center"
                >
                    <h1>Retratos</h1>
                    <h4 class="display-4">Allan Luna</h4>
                </div>
            </div>
        </div>
    </section>
    <section id="works">
        {#each works as work}
            <Work
                name={work.name}
                description={work.description}
                image={work.image}
                classes={work.classes}
                full={work.full}
                shadow={work.shadow}
                left={work.left}
            />
        {/each}
    </section>
</div>

<style lang="scss">
    @import "../styles/sections.scss";
    // Make #landing content padding responsive and bigger in bigger displays
    #landing {
        padding: 15rem 0;
        height: 100vh;
        background-image: url("/images/allan.png");
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

    .artwork-wrapper {
        min-height: 100vh;
    }

    .artwork {
        // Make it small
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        img {
            width: 70%;
        }
    }

    .artwork-text {
        margin: auto;
        padding: 2rem;
        width: 100%;
    }
</style>
