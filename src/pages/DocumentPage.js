import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/DocumentPage.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from 'firebase/storage';
function DocumentPage() {
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
                        const uploadDate = new Date(metadata.timeCreated);
                        const formattedDate = `${uploadDate.getFullYear()}-${(uploadDate.getMonth() + 1).toString().padStart(2, '0')}-${uploadDate.getDate().toString().padStart(2, '0')}`;
                        return {
                            name: metadata.name,
                            downloadURL: downloadURL,
                            uploadDate: formattedDate
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
        <div className='documentPage'>
            <h1>{t('home.document')}</h1>
            <table>
                <tr>
                    <th>File Name</th>
                    <th>Upload Date</th>
                    <th>Download</th>
                </tr>
                {/** Add tr below for addition table row on files*/}
                {files.map((file, index) => (
                    <tr>
                        <td> <FontAwesomeIcon icon={faFile} /> {file.name} </td>
                        <td>{file.uploadDate}</td>
                        <td>
                            <Link to={file.downloadURL} target="_blank" download>
                                <FontAwesomeIcon icon={faDownload} />
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default DocumentPage;