export function meta() {
    return [{title: "Le déroulé de la journée · Notre mariage"}];
}

const timeline =[ //["10h30", "Mariage civil", "Famille et amis proches, on vous attend à la mairie de la Roche sur yon."],
    //["11h30", "Déjeuner libre", "Le moment que nous avons tant hâte de partager avec vous."],
    ["14h00", "Mariage religieux", "Le moment que nous avons tant hâte de partager avec vous."],
    ["16h00", "Instants photos de groupe", "Temps dédiés pour capturer le moment en famille et entre amis."],
    ["17h00", "Cocktail ensoleillé", "Bulles, bouchées gourmandes et quelques surprises."],
    ["20h00", "Dîner", "À table pour une soirée pleine de saveurs."],
    ["22h30", "On ouvre le bal", "Et la fête continue jusqu'au bout de la nuit ! (3h)"]];

export default function Journee() {
    return <main className="content-page day-page">
        <header className="page-hero"><p className="eyebrow">14 Août 2027</p><h1>Une journée<br/><em>à savourer.</em>
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
