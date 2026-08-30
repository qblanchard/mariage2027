export function meta() {
    return [{title: "Les logements · Notre mariage"}];
}

export default function Logement() {
    return <main className="content-page">
        <header className="page-hero"><p className="eyebrow">Informations pratiques</p><h1>Les<br/><em>logements</em>
        </h1><p>Nous vous avons sélectionné plusieurs adresses tout près du lieu de réception, pour profiter pleinement de
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
                <article><span>04</span><h3>ibis budget La Roche-sur-Yon</h3><p>Une option hôtel économique à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 4,1 sur 5">★ 4,1 <small>· 1 100 avis Google</small></p><a href="https://maps.app.goo.gl/D2Y8S8cUEQDu3h6X6" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>05</span><h3>ibis La Roche-sur-Yon</h3><p>Un hôtel situé dans la zone de Beaupuy.</p><p className="lodging-rating" aria-label="Note de 4,1 sur 5">★ 4,1 <small>· 1 255 avis Google</small></p><a href="https://maps.app.goo.gl/iCYB9RY5s26oG2XX7" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>06</span><h3>ibis Styles La Roche-sur-Yon</h3><p>Une adresse hôtelière à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 4,7 sur 5">★ 4,7 <small>· 317 avis Google</small></p><a href="https://maps.app.goo.gl/dbNXAUaCawnXQJBP9" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>07</span><h3>Gîtes Les Crins au bord du lac</h3><p>Une option gîte à La Roche-sur-Yon.</p><p className="lodging-rating" aria-label="Note de 4,6 sur 5">★ 4,6 <small>· plus de 30 avis</small></p><a href="https://maps.app.goo.gl/X3kEzQPMeLPBDjDs6" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>08</span><h3>Camping l&apos;Ambois</h3><p>Une alternative camping à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 9 sur 10">★ 9/10 <small>· 8 avis clients vérifiés</small></p><a href="https://maps.app.goo.gl/Gj844k5Rhmypt6S38" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
            </div>
        </section>
    </main>;
}
