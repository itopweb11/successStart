import React, {useState} from 'react'
import DocumentsForSignature from "./documentsForSignature/documentsForSignature";
import ProjectDocuments from "./projectDocuments/projectDocuments";
import ProfileDocuments from "./profileDocuments/profileDocuments";

const DocumentationComp = () => {
    const[documentation, setDocumentation] = useState('documentsForSignature')
    const documentationContent = () => {
        switch (documentation) {
            case 'documentsForSignature': return <DocumentsForSignature />
            case 'projectDocuments': return <ProjectDocuments />
            case 'profileDocuments': return <ProfileDocuments />
            default: return <DocumentsForSignature />
        }
    }

    return (
        <div className='documentation'>
            <h3>Ваши документы</h3>
            <div className='documentation__header'>
                <span
                    onClick={() => setDocumentation('documentsForSignature')}
                    className={documentation === 'documentsForSignature' ? 'itemActive' : ''}
                >
                    Документы на подпись
                </span>
                <span
                    onClick={() => setDocumentation('projectDocuments')}
                    className={documentation === 'projectDocuments' ? 'itemActive' : ''}
                >
                    Документы по проектам
                </span>
                <span
                    onClick={() => setDocumentation('profileDocuments')}
                    className={documentation === 'profileDocuments' ? 'itemActive' : ''}
                >
                    Документы профиля
                </span>
            </div>
            {documentationContent()}
        </div>
    )
}

export default DocumentationComp;