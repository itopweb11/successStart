import React, {useState} from 'react'
import DocumentsForSignature from "./documentsForSignature/documentsForSignature";
import ProjectDocuments from "./projectDocuments/projectDocuments";

const DocumentationComp = () => {
    const[documentation, setDocumentation] = useState('profileDescBankDetails')
    const documentationContent = () => {
        switch (documentation) {
            case 'documentsForSignature': return <DocumentsForSignature />
            case 'projectDocuments': return <ProjectDocuments />
            default: return <DocumentsForSignature />
        }
    }

    return (
        <div className='documentation'>
            <h3>Ваши документы</h3>
            <div className='documentation__header'>
                <span onClick={() => setDocumentation('documentsForSignature')}>Документы на подпись</span>
                <span onClick={() => setDocumentation('documentsForSignature')}>Документы по проектам</span>
                <span onClick={() => setDocumentation('projectDocuments')}>Документы профиля</span>
            </div>
            {documentationContent()}
        </div>
    )
}

export default DocumentationComp;