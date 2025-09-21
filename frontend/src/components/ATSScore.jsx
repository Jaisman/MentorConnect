import React, { useState } from 'react';
import axios from 'axios';

export default function ATSScore() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeResume = async () => {
    if (!file) {
      setError('Please upload a file first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const text = await file.text();
      const response = await axios.post('http://localhost:5000/api/ats/analyze-resume', {
        resumeText: text
      });

      setAnalysis(response.data);
    } catch (error) {
      console.error('Analysis error:', error);
      setError('Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">ATS Score Analysis</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Your Resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        <button
          onClick={analyzeResume}
          disabled={!file || loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
            text-white font-bold py-2 px-4 rounded-lg
            hover:opacity-90 transition-opacity
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </div>

      {analysis && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Analysis Results</h2>
          
          <div className="grid gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">ATS Score</h3>
              <p className="text-3xl font-bold text-blue-600">{analysis.score}</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700">Key Strengths</h3>
              <p className="text-gray-600">{analysis.strengths}</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700">Missing Keywords</h3>
              <p className="text-gray-600">{analysis.keywords}</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700">Format Issues</h3>
              <p className="text-gray-600">{analysis.format}</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700">Recommendations</h3>
              <p className="text-gray-600">{analysis.recommendations}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}