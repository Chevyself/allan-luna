<script lang="ts">
    import { base } from "$app/paths"
    import Work from "../components/Work.svelte";
    
    let works = [
        {
            name: "",
            description: "En esta ocasión hay una continuidad, le he dedicado más atención y me he interesado más por el trabajo con el collage.",
            image: `${base}/images/2-2.jpg`,
            full: true,
            classes: "full-view",
            shadow: true,
        },
        {
            name: "¿En el proceso de la creación artística existe breve recolección de todo esto?",
            description: "Incluso para el dibujo,tengo lo que se llamaría un banco de imágenes, obviamente ustedes tienen la oportunidad de usar mejor las herramientas digitales, de mantenerlo en archivos fotográficos en un celular o en un computador, es lo que yo hago ahora, pero antes era en una caja de zapatos con todas las fotografías con imágenes que me interese dibujar",
            image: `${base}/images/1.jpg`,
        },
        {
            name: "",
            description: "La imagen original proviene de un libro de fotografía sobre los indígenas norteamericanos, esta fotografía es aproximadamente de 1870 y son mujeres Hopi, una asociación de ideas me hizo pensar en la guerra de las galaxias, pero en realidad estos ratones son mujeres Hopi, ellas hacen crecer su cabello abundantemente y luego lo recogen y claro aquí intervino la asociación con el tiempo, un símbolo fácilmente reconocido de el tiempo es un reloj, la intención era ilustrar un poema que escribí para mi hija Camila Mercedes, que me preguntó cuando tenía siete años, ¿que es el tiempo? Después de mucho tiempo logré escribirle un balbuceo, le di mi explicación y este fue el resultado.",
            image: `${base}/images/hopi.jpg`
        },
        {
            name: "",
            description: "Los collage, siempre voy recogiendo las imágenes que me llaman la atención y van a la caja, después de un tiempo tomo estas imágenes y viene el recorte, todavía no se lo que haré, cuando tengo un gran volumen de imágenes recortadas las extiendo al rededor y dejo que las imágenes establezcan su relación, hay unas que son muy claras, se llaman solas, como en este caso: el colibrí, las alas, esos edificios que parecen velas de barco o alas y me gusta mucho el trabajo con el collage porque a diferencia del dibujo se desprende más del concepto, el dibujo para mi es muy conceptual, de mucho intelecto, en el collage la obra casi que se arma.",
            image: `${base}/images/3-1.jpg`,
            left: false
        },
        {
            name: "¿La recolección de las imágenes nace con el fin de retratar la ciudad o simplemente con la idea de criticar algo?",
            description: "No y no porque me parezca mal, sino porque ya hay gente que lo ha hecho o que lo está haciendo y que lo hace de la mejor manera ¿Conocen la obra de Óscar Muñoz? Oscar Muñoz es uno de los grandes artistas contemporáneos, Doris Salcedo está bien, pero los grandes del arte conceptual en Colombia son Oscar Muñoz y Antonio Caro que fue el pionero, fue el que hizo el logotipo de la palabra Colombia, trastocando el logotipo de Coca-Cola, hizo una obra famosa en el 68 cuando fue presidente Lleras Restrepo, que decía: “todo esta muy caro” es una figura que perfectamente se la puede poner por delante de estos ídolos del arte contemporáneo como Damien Hirst, le mencionaré una obra de el: “aliento”, se ve un discurso tremendo contra la violencia, contra el sistema y ni siquiera lo plantea como un homenaje a los desaparecidos de esta época, habla del que se fue en cualquier época, la obra consiste el siete espejos circulares de acero donde el espectador entra y en los siete círculos grises no ve nada, hay una tarjeta que lo invita a echar su aliento sobre estos, cuando el espectador sopla sobre el espejo aparece una imagen de una persona que ya no está con nosotros termina el momento y la imagen vuelve a desaparecer, entonces es muy contundente, para mi mucho más contundente que ese poco de sillas que puso Doris Salcedo en el palacio de justicia, lo mismo los narcisos o esas imágenes temporales o esos retratos que el fija con polvo de carbón en un lavamanos y el video muestra como en el momento que abre el agua y el agua empieza a corren la imagen se disuelve.",
            image: `${base}/images/4.jpg`,
        },
        {
            name: "¿Usted que espera lograr con la técnica de collage?",
            description: "Yo lo veo como coreografías, simplemente veo imágenes que de repente se van asociando unas con otras, objetos, por ejemplo este laberinto violeta era simplemente el soporte de un avión que le compré a mi hijo y estuvo tirado mucho tiempo, el fondo de color me transmitió la sensación de una vista urbana vista desde arriba, por eso para mi el collage es más libre, no hay un concepto fijo antes de empezar, lo que hay son imágenes con las cuales uno puede jugar y se pueden dar situaciones de humor, aquí hay un dibujo que tiene una historia, cuando yo lo termine salí a la ventana a ponerle laca y se lo llevo el viento, a los tres días apareció en un montón de arena  y se había dañado todo lo de abajo y solo estaba rescatable la cara y me encontré esta imagen, entonces encontré esta imagen donde me pareció que se establecía un gesto de picardía de la niña viendo a los dos viejos que se van a besar y después hubo algo más atrevido que fue la imagen de esta estatua griega entonces no sabe si es por el beso o por el muchacho, pero no pensé en hacer algo erotica o de humor, ahora estoy entrando en una etapa más libre donde no es la reproducción del objeto sino su representación, algo parecido al juego, algo que hace el niño cuando toma la escoba, objetivamente, figurativamente o realmente el niño tiene un palo de escoba, pero el tiene en las manos un caballo, entonces llegar a ese punto que ya no me preocupa la reproducción, que es algo viejo, que ya lo dijo Matiz en 1907 cuando ya mejoraron las cámaras fotográficas, a partir de ese momento ya no tenemos que hacer las cosas tal como son, para eso está la cámara, creo que lo que voy a dibujar de ahora en adelante tendrá más énfasis en la historia que en la reproducción de la imagen.",
            image: `${base}/images/5.jpg`,
            left: false
        },
        /*
        {
            name: "6",
            image: `${base}/images/6.jpg`,
        }
        */
    ];
</script>

<svelte:head>
    <title>Allan Luna</title>
</svelte:head>

<div class="view-parent">
    <section id="landing" class="view" style="background-image: url({base}/images/allan.png);">
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
