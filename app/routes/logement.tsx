export function meta() {
    return [{title: "Les logements · Notre mariage"}];
}

export default function Logement() {
    return <main className="content-page">
        <header className="page-hero"><p className="eyebrow">Informations pratiques</p><h1>Les<br/><em>logements</em>
        </h1><p>Nous vous avons sélectionné trois adresses tout près du lieu de réception, pour profiter pleinement de
            la fête.</p></header>
        <section className="lodging-section"><p className="eyebrow">Nos bonnes adresses</p><h2>Où poser vos valises
            ?</h2>
            <div className="lodging-grid">
                <article><span>01</span><h3>La Grange de la Ménagerie</h3><p>Une première adresse à proximité immédiate
                    de l&apos;Étable de Beaupuy.</p><a href="https://maps.app.goo.gl/1txgGW6xfFesqT126" target="_blank"
                                                       rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>02</span><h3>La Petite Ménagerie</h3><p>Une autre option tout près du lieu de
                    réception.</p><a href="https://maps.app.goo.gl/t33pXo4wBCFPWgTaA" target="_blank" rel="noreferrer">Voir
                    sur Google Maps →</a></article>
                <article><span>03</span><h3>Gîte de la Balangerie</h3><p>Un gîte situé à quelques minutes de
                    Beaupuy.</p><a href="https://maps.app.goo.gl/zVXCw5XmgbDRYACW7" target="_blank" rel="noreferrer">Voir
                    sur Google Maps →</a></article>
            </div>
        </section>
    </main>;
}
