import Section from '../../components/section';
import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';


function Certifications(){
    const [files, setCertifications] = useState<[string]>();
    
    const fetchData = useCallback( async ()=> {
        const {data} = await axios.get("/api/certifications");
        if (data) {
            setCertifications(data);
        }
    }, [setCertifications]);

    useEffect(() => {
        fetchData();
    }, [fetchData]) 

    if(files){
    return(
        <>
            <Section elementName="Certifications" HeaderText='Certification' customstyle="background-color: var(--primary);">
            <ul className="certifications">
                {files.map((file) =>  
                    <li>
                        <div className="certification">
                            <div className="file-name">
                                <div>{file}</div>
                            </div>    
                            <embed src={file} width="100px" height="200px" />
                        </div> 
                    </li>
                )}
            </ul>
            </Section>
        </>
    )}else{
        return null;
    };
}

export default Certifications;