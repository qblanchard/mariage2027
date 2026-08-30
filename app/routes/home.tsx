import {Link} from "react-router";

export function meta() {
    return [
        {title: "Notre mariage"},
        {name: "description", content: "Toutes les informations pour notre mariage."},
    ];
}

export default function Home() {
    return <main className="home-page">
        <section className="hero" aria-labelledby="hero-title"><p className="eyebrow">Nous nous marions</p><h1
            id="hero-title">L&apos;amour,<br/><em>ensoleillé.</em></h1><p className="hero-date">Le 14 Août 2027 · La roche sur yon</p>
            <p className="hero-copy">Nous avons hâte de célébrer cette belle journée avec vous.</p>
            <div className="hero-actions"><Link className="button button-primary" to="/journee">Découvrir la
                journée</Link><Link className="button button-quiet" to="/lieu">Infos pratiques →</Link></div>
        </section>
        <section className="intro-section"><p className="eyebrow">Tout ce qu&apos;il faut savoir</p><h2>Gardez le soleil<br/>dans
            vos agendas.</h2>
            <div className="page-links"><Link to="/lieu"><span>01</span><strong>Le lieu</strong><b>→</b></Link><Link to="/logement"><span>02</span><strong>Les
                logements</strong><b>→</b></Link><Link to="/theme"><span>03</span><strong>Le thème
                agrume</strong><b>→</b></Link><Link to="/journee"><span>04</span><strong>Le déroulé de la
                journée</strong><b>→</b></Link></div>
        </section>
    </main>;
}
