export function meta() {
    return [{title: "Le déroulé de la journée · Notre mariage"}];
}

const timeline = [["15h30", "Accueil des invités", "On vous attend au [lieu de cérémonie]."], ["16h00", "Cérémonie", "Le moment que nous avons tant hâte de partager avec vous."], ["17h00", "Cocktail ensoleillé", "Bulles, bouchées gourmandes et quelques surprises."], ["20h00", "Dîner", "À table pour une soirée pleine de saveurs."], ["23h00", "On ouvre le bal", "Et la fête continue jusqu&apos;au bout de la nuit !"]];

export default function Journee() {
    return <main className="content-page day-page">
        <header className="page-hero"><p className="eyebrow">[Jour] [date]</p><h1>Une journée<br/><em>à savourer.</em>
        </h1><p>Voici les grandes étapes de cette parenthèse que nous avons imaginée avec beaucoup d&apos;amour.</p>
        </header>
        <section className="timeline" aria-label="Déroulé de la journée">{timeline.map(([time, title, text]) => <article
            key={time}>
            <time>{time}</time>
            <span className="timeline-dot"/>
            <div><h2>{title}</h2><p>{text}</p></div>
        </article>)}</section>
        <section className="closing-note"><p className="eyebrow">Une seule consigne</p><h2>Profitez, trinquez,<br/><em>dansez
            !</em></h2><p>Les horaires sont indicatifs : laissez-vous porter par la journée.</p></section>
    </main>;
}
