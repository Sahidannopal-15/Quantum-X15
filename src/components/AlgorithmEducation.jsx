import React from 'react';
import { Hash, Zap, Shield, CheckCircle2 } from 'lucide-react';
import bitcoinBg from '../assets/bitcoinBg.jpg';

const AlgorithmEducation = () => {
  const algorithms = [
    {
      name: 'SHA-256',
      icon: Zap,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/20',
      outputSize: 'Standard Length',
      speed: '⚡⚡⚡⚡',
      speedText: 'Super Fast',
      security: '🔒🔒🔒',
      securityText: 'Strong',
      usedBy: ['Bitcoin', 'Bitcoin Cash', 'Tencent Cloud'],
      bestFor: 'Speed & Crypto',
      description: 'The industry favorite. It is extremely fast and perfect for handling millions of transactions in seconds.'
    },
    {
      name: 'SHA-384',
      icon: Hash,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/20',
      outputSize: 'Longer Length',
      speed: '⚡⚡⚡',
      speedText: 'Fast',
      security: '🔒🔒🔒🔒',
      securityText: 'Extra Secure',
      usedBy: ['Hedera', 'SSL/TLS Issuers', 'Certificate Auth'],
      bestFor: 'Official Trust',
      description: 'A more heavy-duty version. Often used by security companies to protect high-value web connections.'
    },
    {
      name: 'SHA-512',
      icon: Shield,
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
      borderColor: 'border-red-500/20',
      outputSize: 'Maximum Length',
      speed: '⚡⚡',
      speedText: 'Steady',
      security: '🔒🔒🔒🔒🔒',
      securityText: 'Unbreakable',
      usedBy: ['Stellar', 'Linux', 'Security Firms'],
      bestFor: 'System Safety',
      description: 'The heavy hitter. It creates a massive digital fingerprint, making it nearly impossible to crack.'
    }
  ];

  const comparisonData = [
    { feature: 'Result Length', sha256: '64 characters', sha384: '96 characters', sha512: '128 characters' },
    { feature: 'Processing Time', sha256: 'Instant', sha384: 'Very Fast', sha512: 'Fast' },
    { feature: 'Safety Level', sha256: 'High', sha384: 'Very High', sha512: 'Maximum' },
    { feature: 'Main Goal', sha256: 'Efficiency', sha384: 'High Integrity', sha512: 'Core Protection' }
  ];

  const useCases = [
    {
      icon: '₿',
      title: 'Crypto & Blockchain',
      algorithm: 'SHA-256',
      reason: 'Standard for Bitcoin and Bitcoin Cash to keep transactions fast.'
    },
    {
      icon: '🌐',
      title: 'Web Certificates',
      algorithm: 'SHA-384',
      reason: 'Used by SSL issuers to verify that a website is safe to visit.'
    },
    {
      icon: '🐧',
      title: 'Operating Systems',
      algorithm: 'SHA-512',
      reason: 'How Linux secures system files and user passwords.'
    },
    {
      icon: '☁️',
      title: 'Cloud Integrity',
      algorithm: 'SHA-256',
      reason: 'Used by Tencent Cloud to quickly verify large data transfers.'
    }
  ];

  return (
    <div className="relative w-full py-20 px-4">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bitcoinBg})` }}
  />
  <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pick the Best Algorithm
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Not sure which one to use? Here is a simple comparison between SHA-256, SHA-384, and SHA-512.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {algorithms.map((algo, index) => {
            const IconComponent = algo.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-900/60 border ${algo.borderColor} rounded-2xl p-5 hover:border-opacity-100 transition-all duration-200`}
              >
                <div className="text-center mb-5">
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-3 bg-gradient-to-br ${algo.gradient} rounded-2xl`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{algo.name}</h3>
                  <p className="text-sm text-gray-400">{algo.outputSize}</p>
                </div>

                <p className="text-gray-300 text-sm mb-5 leading-relaxed">{algo.description}</p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Speed:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{algo.speed}</span>
                      <span className="text-xs text-gray-500">{algo.speedText}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Security:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{algo.security}</span>
                      <span className="text-xs text-gray-500">{algo.securityText}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-3">
                  <p className="text-xs text-gray-500 mb-2">Used by:</p>
                  <div className="flex flex-wrap gap-2">
                    {algo.usedBy.map((user, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                        {user}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r ${algo.gradient} text-white rounded-full`}>
                    {algo.bestFor}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Side-by-Side Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900/60 border border-gray-700 rounded-xl overflow-hidden">
              <thead className="bg-gray-800/80">
                <tr>
                  <th className="text-left p-3 text-gray-400 font-semibold text-sm">Feature</th>
                  <th className="text-center p-3 text-blue-400 font-semibold text-sm">SHA-256</th>
                  <th className="text-center p-3 text-purple-400 font-semibold text-sm">SHA-384</th>
                  <th className="text-center p-3 text-red-400 font-semibold text-sm">SHA-512</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-800/20 transition-all duration-150">
                    <td className="p-3 text-gray-300 font-medium text-sm">{row.feature}</td>
                    <td className="p-3 text-center text-gray-200 text-sm">{row.sha256}</td>
                    <td className="p-3 text-center text-gray-200 text-sm">{row.sha384}</td>
                    <td className="p-3 text-center text-gray-200 text-sm">{row.sha512}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-6">Common Real-World Uses</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-900/60 border border-gray-700 rounded-xl p-5 hover:border-purple-500/40 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm">{useCase.algorithm}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{useCase.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmEducation;