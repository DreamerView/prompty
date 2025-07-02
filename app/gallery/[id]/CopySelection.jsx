"use client";
import { useState } from "react";

export default function CopySection({ prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="bg-dark p-3 rounded-4 text-white">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="m-0">Prompt</h6>
        <button
          onClick={handleCopy}
          className={`btn rounded-4 d-flex gap-2 ${copied ? "btn-success":"btn-dark"}`}
        >
          <i className={`bi ${copied ? "bi-check2-all" : "bi-copy"}`}></i>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <code className="d-block text-muted">{prompt}</code>
    </div>
  );
}
