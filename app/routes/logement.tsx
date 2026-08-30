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
            <p className="lodging-note">Distances routières estimées depuis l&apos;Étable de Beaupuy · Les tarifs sont indicatifs et varient selon la période.</p>
            <div className="lodging-grid">
                <article><span>01</span><h3>La Grange de la Ménagerie</h3><p>Une première adresse à proximité immédiate
                    de l&apos;Étable de Beaupuy.</p><div className="lodging-facts"><p><span>Trajet</span>3,6 km · env. 6 min</p><p><span>Budget</span>Dès 238 € / nuit</p></div><a href="https://maps.app.goo.gl/1txgGW6xfFesqT126" target="_blank"
                                                       rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>02</span><h3>La Petite Ménagerie</h3><p>Une autre option tout près du lieu de
                    réception.</p><div className="lodging-facts"><p><span>Trajet</span>3,6 km · env. 6 min</p><p><span>Budget</span>Tarif sur demande</p></div><a href="https://maps.app.goo.gl/t33pXo4wBCFPWgTaA" target="_blank" rel="noreferrer">Voir
                    sur Google Maps →</a></article>
                <article><span>03</span><h3>Gîte de la Balangerie</h3><p>Un gîte situé à quelques minutes de
                    Beaupuy.</p><div className="lodging-facts"><p><span>Trajet</span>3,3 km · env. 5 min</p><p><span>Budget</span>Dès 325 € / nuit</p></div><a href="https://maps.app.goo.gl/zVXCw5XmgbDRYACW7" target="_blank" rel="noreferrer">Voir
                    sur Google Maps →</a></article>
                <article><span>04</span><h3>ibis budget La Roche-sur-Yon</h3><p>Une option hôtel économique à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 4,1 sur 5">★ 4,1 <small>· 1 100 avis Google</small></p><div className="lodging-facts"><p><span>Trajet</span>1,1 km · env. 2 min</p><p><span>Budget</span>Dès 61 € / nuit</p></div><a href="https://maps.app.goo.gl/D2Y8S8cUEQDu3h6X6" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>05</span><h3>ibis La Roche-sur-Yon</h3><p>Un hôtel situé dans la zone de Beaupuy.</p><p className="lodging-rating" aria-label="Note de 4,1 sur 5">★ 4,1 <small>· 1 255 avis Google</small></p><div className="lodging-facts"><p><span>Trajet</span>1,2 km · env. 3 min</p><p><span>Budget</span>Env. 85 € / nuit</p></div><a href="https://maps.app.goo.gl/iCYB9RY5s26oG2XX7" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>06</span><h3>ibis Styles La Roche-sur-Yon</h3><p>Une adresse hôtelière à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 4,7 sur 5">★ 4,7 <small>· 317 avis Google</small></p><div className="lodging-facts"><p><span>Trajet</span>1,2 km · env. 3 min</p><p><span>Budget</span>Dès 129 € / nuit</p></div><a href="https://maps.app.goo.gl/dbNXAUaCawnXQJBP9" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>07</span><h3>Gîtes Les Crins au bord du lac</h3><p>Une option gîte à La Roche-sur-Yon.</p><p className="lodging-rating" aria-label="Note de 4,6 sur 5">★ 4,6 <small>· plus de 30 avis</small></p><div className="lodging-facts"><p><span>Trajet</span>3 km · env. 6 min</p><p><span>Budget</span>Tarif sur demande</p></div><a href="https://maps.app.goo.gl/X3kEzQPMeLPBDjDs6" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
                <article><span>08</span><h3>Camping l&apos;Ambois</h3><p>Une alternative camping à Mouilleron-le-Captif.</p><p className="lodging-rating" aria-label="Note de 9 sur 10">★ 9/10 <small>· 8 avis clients vérifiés</small></p><div className="lodging-facts"><p><span>Trajet</span>4,9 km · env. 8 min</p><p><span>Budget</span>Dès 20 € / nuit</p></div><a href="https://maps.app.goo.gl/Gj844k5Rhmypt6S38" target="_blank" rel="noreferrer">Voir sur Google Maps →</a></article>
            </div>
        </section>
    </main>;
}
