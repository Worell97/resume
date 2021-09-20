import React from 'react';
import Section from '../../components/section';

function Experience(){
    return(
        <>
            <Section elementName="Experience" HeaderText='Professional experience' customstyle="background-color: var(--black);">
            <ul>
                <li>
                    <section>
                            <h3>02/2018 – 04/2019 – Rhede Sistemas.</h3>
                            <p>Cargo: Delphi/Pascal Developer Jr.</p>
                            Principais atividades: Desenvolvimento do projeto i9v3, criação de scripts em
                            pascal para manipulação do banco de dados e geração de relatórios.
                    </section>
                </li>
                <li>
                    <section>
                            <h3>10/2019 – 12/2020 – Eco Centauro Sistemas Inteligentes.</h3>
                            <p>Cargo: Delphi Developer Jr.</p>
                            Principais atividades: Desenvolvimento do projeto Eco, aplicando correções e
                            novas soluções ao sistema no setor financeiro.
                    </section>
                </li>
                <li>
                    <section>
                            <h3>12/2020 – 06/2021 – Sysmo Sistemas.</h3>
                            <p>Cargo: Delphi Developer.</p>
                            Principais atividades: Desenvolvimento do projeto S1, aplicando correções e
                            novas soluções ao sistema no setor de logistica.
                    </section>
                </li>
            </ul>
            </Section>
        </>
    );
}

export default Experience;