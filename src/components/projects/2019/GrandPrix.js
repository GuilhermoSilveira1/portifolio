import React from "react"
import Terminal from "../../Terminal"
import img1 from "./../../../img/Hackaton.jpg"
import img2 from "./../../../img/Hackaton_1.jpg"
import img3 from "./../../../img/Hackaton_2.jpg"
import "./styles/GrandPrix.css"


const GrandPrix = () => {
    const lineGrandPrix = [
        'Hackathon Bosch 2019: Desafios e Conquistas',
    ]

    const text1 = [
        'No final de 2019, fui surpreendido por uma oportunidade incrível. O professor responsável pelo clube de robótica nos informou sobre um hackathon organizado pela Bosch, em parceria com o Senai, que chamaram de Grand Prix de Inovação. O evento seria realizado no Campus da Indústria, e eu, junto com alguns colegas, não hesitamos em participar para descobrir como funcionava esse tipo de competição.'
    ]

    const text2 = [
        'No entanto, o que inicialmente parecia ser uma experiência em equipe conhecida tomou um rumo inesperado. As equipes foram formadas aleatoriamente, e tive que me adaptar rapidamente a trabalhar com pessoas novas. O desafio, proposto pela Bosch, envolvia conectividade no campo — um tema que exigiu bastante criatividade e colaboração entre os integrantes.'
    ]

    const text3 = [
        'Apesar do choque inicial, essa experiência me proporcionou um aprendizado inestimável. Além de desenvolver o projeto em si, aprendi sobre estratégias de venda, pós-venda, como realizar apresentações para profissionais da indústria e, claro, a importância do trabalho em equipe.'
    ]

    const text4 = [
        'Nosso esforço foi recompensado. Ao final das apresentações, minha equipe conquistou o terceiro lugar. Como prêmio, a Bosch ofereceu uma visita exclusiva à sua fábrica no CIC, um encerramento perfeito para uma experiência inesquecível.'
    ]

    return (
        <>
            <div className="grand-title">
                <Terminal lines={lineGrandPrix} />
            </div>

            <div className="grand-text">
                <Terminal lines={text1} letterSpeed={50} />
                <Terminal lines={text2} letterSpeed={50} />
                <Terminal lines={text3} letterSpeed={50} />
                <Terminal lines={text4} letterSpeed={50} />
            </div>

            <div className="Grand-image">
                <img alt="Hackaton do Senai" src={img1} id="Grand-img1" />
                <img alt="Hackaton do Senai" src={img2} id="Grand-img2" />
                <img alt="Hackaton do Senai" src={img3} id="Grand-img3" />
            </div>

        </>
    )
}

export default GrandPrix