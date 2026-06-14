import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl bg-stone-900 shadow-lg dark:bg-stone-800/50">
      <div className="flex items-center justify-between bg-stone-800/50 px-4 py-2 text-xs font-medium text-stone-400">
        <span>{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed text-indigo-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
