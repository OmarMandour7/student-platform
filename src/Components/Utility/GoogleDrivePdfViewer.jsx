const GoogleDrivePdfViewer = ({pdfId}) => {

  return (
    <div className="container my-4 text-center">
      <iframe
        src={`https://drive.google.com/file/d/${pdfId}/preview`}
        width="50%"
        height="700"
        allow="autoplay"
        title="PDF from Google Drive"
      ></iframe>
    </div>
  );
};

export default GoogleDrivePdfViewer;
