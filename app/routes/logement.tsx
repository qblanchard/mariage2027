export function meta() {
    return [{title: "Les logements · Notre mariage"}];
}

export default function Logement() {
    return <main className="content-page">
        <header className="page-hero"><p className="eyebrow">Informations pratiques</p><h1>Les<br/><em>logements</em></h1><p>Trouvez le pied-à-terre idéal pour profiter pleinement de la fête, jusqu&apos;au lendemain.</p></header>
        <section className="lodging-section"><p className="eyebrow">Dormir sur place ou aux alentours</p><h2>Où poser vos valises ?</h2>
            <div className="lodging-grid">
                <article><span>01</span><h3>Sur le domaine</h3><p>Quelques chambres sont disponibles sur place. Contactez-nous rapidement si vous souhaitez en réserver une.</p><a href="mailto:[votre-email]">Nous écrire →</a></article>
                <article><span>02</span><h3>À proximité</h3><p>Vous trouverez plusieurs gîtes, hôtels et chambres d&apos;hôtes autour de Mouilleron-le-Captif.</p><a href="https://www.google.com/maps/search/h%C3%B4tel+pr%C3%A8s+de+Mouilleron-le-Captif" target="_blank" rel="noreferrer">Voir les hébergements →</a></article>
                <article><span>03</span><h3>Le retour</h3><p>Des taxis peuvent être réservés à l&apos;avance. Nous vous transmettrons les coordonnées utiles prochainement.</p></article>
            </div>
        </section>
    </main>;
}
