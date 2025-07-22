const GoogleDrivePdfViewer = ({pdfId}) => {

  return (
    <div className="container my-4">
      <iframe
        src={`https://drive.google.com/file/d/${pdfId}/preview`}
        width="100%"
        height="600"
        allow="autoplay"
        title="PDF from Google Drive"
      ></iframe>
    </div>
  );
};

export default GoogleDrivePdfViewer;
