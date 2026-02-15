import { CheckCircle2, ImageIcon, UploadIcon } from "lucide-react";
import React, { useState } from "react";
import { useOutletContext } from "react-router";
import {
  PROGRESS_INCREMENT,
  PROGRESS_INTERVAL_MS,
  REDIRECT_DELAY_MS,
} from "lib/constants";

interface AuthContext {
  isSignedIn: boolean;
  onComplete?: (base64: string) => void;
}

interface UploadProps {
  onComplete?: (base64: string) => void;
}

const Upload: React.FC<UploadProps> = ({ onComplete: onCompleteProp }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  const { isSignedIn, onComplete: onCompleteFromCtx } = useOutletContext<AuthContext>();
  const onComplete = onCompleteProp ?? onCompleteFromCtx;

  // ==============================
  // File Processing Logic
  // ==============================

  const processFile = (selectedFile: File) => {
    if (!isSignedIn) return;

    const reader = new FileReader();
    reader.onerror = () => {
      setFile(null);
      setProgress(0);
    };

    reader.onload = () => {
      const base64Data = reader.result as string;

      let currentProgress = 0;

      const interval = setInterval(() => {
        currentProgress += PROGRESS_INCREMENT;

        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);

          setProgress(100);

          setTimeout(() => {
            onComplete?.(base64Data);
          }, REDIRECT_DELAY_MS);
        } else {
          setProgress(currentProgress);
        }
      }, PROGRESS_INTERVAL_MS);
    };

    reader.readAsDataURL(selectedFile);
  };

  // ==============================
  // Handlers
  // ==============================

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSignedIn) return;

    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setProgress(0);
    processFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isSignedIn) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (!isSignedIn) return;

    const droppedFile = e.dataTransfer.files?.[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!droppedFile || !allowedTypes.includes(droppedFile.type)) {
      return;
    }

    setFile(droppedFile);
    setProgress(0);
    processFile(droppedFile);
  };

  return (
    <div className="upload">
      {!file ? (
        <div
          className={`dropzone ${isDragging ? "is-dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="drop-input"
            accept=".jpg, .jpeg, .png"
            disabled={!isSignedIn}
            onChange={handleFileChange}
          />
          <div className="drop-content">
            <div className="drop-icon">
              <UploadIcon size={20} />
            </div>
            <p>
              {isSignedIn
                ? "Click to upload or just drag and drop your floor plan here."
                : "Sign in or sign up to upload your floor plan and start building with Plotly!"}
            </p>
            <p className="help">Maximum file size is 10MB.</p>
          </div>
        </div>
      ) : (
        <div className="upload-status">
          <div className="status-content">
            <div className="status-icon">
              {progress === 100 ? (
                <CheckCircle2 className="check" />
              ) : (
                <ImageIcon className="image" />
              )}
            </div>
            <h3>{file.name}</h3>
            <div className="progress">
              <div
                className="bar"
                style={{ width: `${progress}%` }}
              />
              <p>
                {progress < 100
                  ? `Analyzing Floor Plan... ${progress}%`
                  : "Redirecting..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
