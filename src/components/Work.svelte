<script lang="ts">
    import { base } from "$app/paths"

    let name: string = 'Lorem Ipsum';
    let description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    let image: string = `${base}/images/ph.jpg`;
    let classes: string = '';
    let full: boolean = false;
    let shadow: boolean = false;
    let left: boolean = true;

    const getId = (): string => {
        return name.toLowerCase().replace(" ", "-");
    };

    const getBlur = (): string => {
        return !full ? ' blur ' : '';
    };

    const getStyle = (): string => {
        let builder = `url(${image})`;
        if (!full) {
            builder = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${builder}`;
        }
        if (shadow) {
            builder = `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%), ${builder}`;
        }
        return `background: ${builder}; background-size: cover; background-position: center; background-attachment: fixed;`;
    }

    export { name, description, image, classes, full, shadow, left };
</script>

<section
    id={getId()}
    class="view work { getBlur() + classes} "
    style="{getStyle()}"
>
    {#if full}
        <div class="d-flex flex-column justify-content-end h-100 p-5">
            <div class="container">
                <p class="h1">{name}</p>
                <p class="lead">{description}</p>
            </div>
        </div>
    {:else}
        <div class="artwork-wrapper view d-flex p-5">
            <div class="artwork align-self-center">
                {#if left}
                    <img src={image} alt={name} class="artwork-image" />
                    <div class="artwork-text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                {:else}
                    <div class="artwork-text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <img src={image} alt={name} class="artwork-image" />
                {/if}
            </div>
        </div>
    {/if}
</section>

<style lang="scss">
    @import "../styles/sections.scss";
    .work {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
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

        // On mobile use only one column
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
            // Also center elements
            justify-items: center;
        }
    }

    .artwork-text {
        margin: auto;
        padding: 2rem;
        width: 100%;
    }
</style>
