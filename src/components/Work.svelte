<script lang="ts">
    let name: string = 'Name';
    let description: string = 'Description';
    let image: string = '/images/ph.jpg';
    let full = true

    const getViewClass = (): string => {
        return full ? 'full-view' : 'half-view';
    }

    const getId = (): string => {
        return name.toLowerCase().replace(' ', '-');
    }

    export {
        name,
        description,
        image,
        full
    };
</script>

<style lang="scss">
    @import '../styles/sections.scss';
    .work {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
</style>

<section id="{ getId() }" class="view work { getViewClass() }" style="background-image: url({image});">
    <div class="d-flex flex-column justify-content-end h-100 p-5">
        <div class="container">
            <h1 class="display-1">{name}</h1>
            <p class="lead">{description}</p>
        </div>
    </div>
</section>