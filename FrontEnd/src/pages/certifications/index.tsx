import Section from '../../components/section';
import React, { useEffect, useCallback, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import data from '../../data/filesPath';
import CarouselCustom from '../../components/Carousel';



function Certifications() {
    /*const filePath = 'D:/User/OneDrive/ProjetosOscar/resume/BackEnd/server/data/certificados/';
    const [files, setCertifications] = useState<AxiosResponse>();
    const fetchData = useCallback(() => {
        axios.get("/api/certifications").then(res => setCertifications(res));
    }, [setCertifications]);
    useEffect(() => {
        fetchData();
    }, [fetchData])*/
    return data ? (
        <Section elementName="Certifications" HeaderText='Certification' customstyle="background-color: var(--primary);">
            <CarouselCustom Itens={data}/>
        </Section>
    ):<>

    </>
};

export default Certifications;