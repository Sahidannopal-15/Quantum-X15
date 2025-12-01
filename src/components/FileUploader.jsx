import React from "react";

export default function FileUploader({ files, setFiles }) {
  const onFiles = (fileList) => {
    const cur = Array.from(files || []);
    const incoming = Array.from(fileList);
    const merged = [...cur];

    incoming.forEach((f) => {
      if (!merged.some(m => m.name === f.name && m.size === f.size)) merged.push(f);
    });

    setFiles(merged);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };

  const handleInput = (e) => {
    onFiles(e.target.files);
    e.target.value = null;
  };

  const removeFile = (index) => {
    const next = Array.from(files);
    next.splice(index, 1);
    setFiles(next);
  };

  return (
    <div></div>
  );
}
