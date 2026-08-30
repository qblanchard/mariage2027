export function meta() {
    return [{title: "Le lieu · Notre mariage"}];
}

export default function Lieu() {
    return <main className="content-page">
        <header className="page-hero"><p className="eyebrow">Informations pratiques</p><h1>Le<br/><em>lieu</em></h1><p>Quelques repères pour arriver l&apos;esprit léger et profiter pleinement de cette
            belle journée.</p></header>
        <section className="location-card">
            <div className="location-art" aria-hidden="true">☼</div>
            <div className="location-details"><p className="eyebrow">La réception</p><h2>L&apos;Étable de Beaupuy</h2>
                <address>Beaupuy<br/>85000 Mouilleron-le-Captif</address>
                <a className="text-link"
                   href="https://www.google.com/maps/search/?api=1&query=L%27%C3%89table+de+Beaupuy%2C+Mouilleron-le-Captif"
                   target="_blank" rel="noreferrer">Ouvrir dans Google Maps ↗</a></div>
        </section>
        <section className="day-stops"><p className="eyebrow">Les rendez-vous de la journée</p><h2>De la promesse<br/>à
            la fête.</h2>
            <div className="stops-grid">
                <article>
                    <time>10h30</time>
                    <h3>La mairie</h3><p>Mairie de La Roche-sur-Yon</p></article>
                <article>
                    <time>14h00</time>
                    <h3>La cérémonie</h3><p>Église Notre-Dame de La Roche-sur-Yon</p></article>
                <article>
                    <time>À partir de 17h00</time>
                    <h3>La réception</h3><p>L&apos;Étable de Beaupuy, à Mouilleron-le-Captif</p></article>
            </div>
        </section>
        <section className="map-section">
            <div><p className="eyebrow">La réception</p><h2>Retrouvez-nous<br/>à Beaupuy.</h2><p>La suite des festivités
                se déroule à L'Étable de Beaupuy, à Mouilleron-le-Captif.</p><a className="text-link"
                                                                                     href="https://www.google.com/maps/search/?api=1&query=L%27%C3%89table+de+Beaupuy%2C+Mouilleron-le-Captif"
                                                                                     target="_blank" rel="noreferrer">Itinéraire
                Google Maps ↗</a></div>
            <iframe title="Carte vers l'Étable de Beaupuy"
                    src="https://www.google.com/maps?q=L%27%C3%89table%20de%20Beaupuy%2C%20Mouilleron-le-Captif&output=embed"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </section>
        <section className="two-columns">
            <div><p className="eyebrow">Venir</p><h2>Comment arriver</h2><p>Un parking sera à votre disposition sur
                place. Pour le covoiturage, n&apos;hésitez pas à vous organiser entre invités.</p></div>
            <div className="tip-card"><span>☀</span><h3>Petit conseil</h3><p>Prévoyez une petite laine pour profiter de
                la soirée sous les étoiles.</p></div>
        </section>
    </main>;
}
