import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { hashFile } from '../utils/hash';

const HashButton = ({ 
  files = [], 
  algorithm = 'SHA-256',
  onHashComplete 
}) => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCalculateHash = async () => {
    if (files.length === 0) return;

    setIsCalculating(true);
    setProgress(0);

    try {
      const results = [];
      
      for (let i = 0; i < files.length; i++) {
        const fileItem = files[i];
        
        const hashHex = await hashFile(fileItem.file, algorithm);
        
        results.push({
          fileName: fileItem.name,
          fileSize: fileItem.size,
          fileType: fileItem.type || 'unknown',
          algorithm: algorithm,
          hash: hashHex,
          timestamp: new Date().toISOString(),
          file: fileItem.file 
        });
        
        setProgress(((i + 1) / files.length) * 100);
      }

      if (onHashComplete) {
        onHashComplete(results);
      }

      console.log('Hash calculation completed:', results);
      
    } catch (error) {
      console.error('Hash calculation error:', error);
      alert('Error calculating hash: ' + error.message);
    } finally {
      setIsCalculating(false);
      setProgress(0);
    }
  };

  const isDisabled = files.length === 0 || isCalculating;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleCalculateHash}
          disabled={isDisabled}
          className={`
            relative px-10 py-5 
            bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
            text-white font-bold text-xl rounded-2xl
            transition-all duration-300
            flex items-center justify-center
            min-w-[320px]
            ${isDisabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:opacity-90 cursor-pointer'
            }
          `}
        >
          <span>
            {isCalculating 
              ? `Calculating... ${Math.round(progress)}%`
              : `Calculate Hash for ${files.length} file${files.length > 1 ? 's' : ''}`
            }
          </span>
          
          {isCalculating && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          {isCalculating ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing files with {algorithm}...
            </span>
          ) : files.length > 0 ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Ready to calculate using {algorithm}
            </span>
          ) : (
            <span>Please upload files first</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HashButton;