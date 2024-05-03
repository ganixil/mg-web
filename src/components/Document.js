import { Link } from 'react-router-dom';
import "../styles/Document.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from 'firebase/storage';
function Document() {
    const { t } = useTranslation();

    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Get a reference to the storage service
        const storage = getStorage();
    
        // Create a reference to the specified folder in the storage bucket
        const folderRef = ref(storage, "documents/");
    
        // List all items in the specified folder
        listAll(folderRef)
          .then((res) => {
            const promises = res.items.map((itemRef) => {
              return Promise.all([
                getMetadata(itemRef),
                getDownloadURL(itemRef)
              ]).then(([metadata, downloadURL]) => {
                return {
                  name: metadata.name,
                  downloadURL: downloadURL
                };
              });
            });
            Promise.all(promises).then((fileData) => {
              setFiles(fileData);
            });
          })
          .catch((error) => {
            console.error('Error listing files:', error);
          });
      }, []);

    return (
        <div className='documentContainer'>
            <h1><Link to="/document">{t('home.document')}</Link></h1>
            <ul>
                {files.slice(0,5).map((file, index) => (
                    <li key={index}>
                        <Link to={file.downloadURL} target="_blank" download>
                            <FontAwesomeIcon icon={faFile} /> &nbsp;
                            <FontAwesomeIcon icon={faDownload} />&nbsp;
                            {file.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Document;