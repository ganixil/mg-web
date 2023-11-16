import { Link } from 'react-router-dom';
import doc1 from '../assets/documents/DummyDocPdf.pdf';
import doc2 from '../assets/documents/DummyDocWord.docx';
import doc3 from '../assets/documents/DummyImage.png';
import doc4 from '../assets/documents/DummyPowerPoint.ppt';
import doc5 from '../assets/documents/DummyTextFile.txt';
import "../styles/Document.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
function Document(){
    return(
        <div className='documentContainer'>
            <h1><Link to="/document"> Helpful Document</Link></h1>
            <ul>
                <li><Link to={doc1} target="_blank" download><FontAwesomeIcon icon={faFile} />Test PDF Document</Link></li>
                <li><Link to={doc2} target="_blank" download><FontAwesomeIcon icon={faFile} />Test Word Document</Link></li>
                <li><Link to={doc3} target="_blank" download><FontAwesomeIcon icon={faFile} />Test Image </Link></li>
                <li><Link to={doc4} target="_blank" download><FontAwesomeIcon icon={faFile} />Test PowerPoint</Link></li>
                <li><Link to={doc5} target="_blank" download><FontAwesomeIcon icon={faFile} />Test Text File</Link></li>
            </ul>
        </div>
    );
}

export default Document;