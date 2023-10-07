import { useState,useEffect } from "react";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

const uploader = Uploader({ 
  apiKey: "free"
 });

const uploaderOptions = {
  showFinishButton: true,
  styles: {
    colors: {
      primary: "#8a2be2"
    }
  }
};

const FileUploader = ({setImageUrl}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleUploadComplete = (files) => {
    if (files.length > 0) {
      const filePath = files[0].filePath;
      const url = uploader.url(filePath, 'thumbnail');
      setFileUrl(url);
      setImageUrl(url);
    }
  };
  useEffect(() => {
    setImageUrl(fileUrl); 
  }, [fileUrl]); 

  return (
    <>
      {!fileUrl ? (
        <UploadDropzone
          uploader={uploader}
          options={uploaderOptions}
          onComplete={handleUploadComplete}
          width="70%"
          height="300px"
        />
      ) : (
        <p>
          <a href={fileUrl} target="_blank">
            {fileUrl}
          </a>
        </p>
      )}
    </>
  );
};

export default FileUploader;
