import { Link } from 'react-router-dom';
import doc1 from '../assets/documents/DummyDocPdf.pdf';
import doc2 from '../assets/documents/DummyDocWord.docx';
import doc3 from '../assets/documents/DummyImage.png';
import doc4 from '../assets/documents/DummyPowerPoint.ppt';
import doc5 from '../assets/documents/DummyTextFile.txt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/DocumentPage.css';
function DocumentPage(){

    return(
        <div className='documentPage'>
            <h1>Helpful Documents</h1>
            <table>
                <tr>
                    <th>File Name</th>
                    <th>Upload Date</th>
                    <th>Download</th>
                </tr>
                {/** Add tr below for addition table row on files*/ }
                <tr>
                    <td> <FontAwesomeIcon icon={faFile} /> Test_PDF_Document.pdf</td>
                    <td>2023-11-21</td>
                    <td>
                        <Link to={doc1} target="_blank" download>
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>    
                    </td>
                </tr>
                <tr>
                    <td> <FontAwesomeIcon icon={faFile} /> Test_Word_Document.docx</td>
                    <td>2023-11-21</td>
                    <td>
                        <Link to={doc2} target="_blank" download>
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>    
                    </td>
                </tr>
                <tr>
                    <td> <FontAwesomeIcon icon={faFile} /> Test_Image_Document.png</td>
                    <td>2023-11-21</td>
                    <td>
                        <Link to={doc3} target="_blank" download>
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>    
                    </td>
                </tr>
                <tr>
                    <td> <FontAwesomeIcon icon={faFile} /> Test_PowerPoint_Document.ppt</td>
                    <td>2023-11-21</td>
                    <td>
                        <Link to={doc4} target="_blank" download>
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>    
                    </td>
                </tr>
                <tr>
                    <td> <FontAwesomeIcon icon={faFile} /> Test_Text_file.txt</td>
                    <td>2023-11-21</td>
                    <td>
                        <Link to={doc5} target="_blank" download>
                            <FontAwesomeIcon icon={faDownload} />
                        </Link>    
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default DocumentPage;