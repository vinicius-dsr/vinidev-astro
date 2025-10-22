import React, { useState, useEffect } from 'react';

interface QRCodePIXProps {
  className?: string;
}

export const QRCodePIX: React.FC<QRCodePIXProps> = ({ className = '' }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  // Chave PIX fornecida pelo usuário
  const pixKey = "00020126780014br.gov.bcb.pix0136da28fedd-af6e-47ad-b5c4-0ac612b938420216Me pague um cafe5204000053039865802BR5924VINICIUS DOS SANTOS REIS6009Sao Paulo62290525REC68F903458AB408534306386304F70";

  useEffect(() => {
    // Gerar QR Code usando API pública
    const generateQRCode = async () => {
      try {
        setIsLoading(true);
        // Usando a API do QR Server para gerar o QR Code
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(pixKey)}`;
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Erro ao gerar QR Code:', error);
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, []);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar chave PIX:', error);
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      {/* QR Code */}
      <div className="bg-secondary-light dark:bg-background-dark border border-zinc-300 dark:border-zinc-800 rounded-xl p-4">
        {isLoading ? (
          <div className="w-[300px] h-[300px] flex items-center justify-center bg-secondary-light dark:bg-background-dark rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-dark dark:border-primary-light"></div>
          </div>
        ) : (
          <img
            src={qrCodeUrl}
            alt="QR Code PIX"
            className="w-[300px] h-[300px] rounded-lg"
            onError={() => {
              console.error('Erro ao carregar QR Code');
            }}
          />
        )}
      </div>

      {/* PIX Key Copy Section */}
      <div className="w-full max-w-md">
        <p className="text-sm font-medium mb-2 text-center">
          Ou copie a chave PIX:
        </p>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-secondary-light dark:bg-background-dark border border-zinc-300 dark:border-zinc-800 rounded-lg p-3 text-xs font-mono break-all">
            {pixKey.substring(0, 50)}...
          </div>
          <button
            onClick={copyPixKey}
            className={`px-4 py-2.5 flex items-center gap-2 rounded-xl font-medium transition-colors ${
              copySuccess
                ? 'bg-green-500 text-white'
                : 'bg-primary-dark dark:bg-primary-light text-white dark:text-black hover:bg-primary-dark/80 hover:dark:bg-primary-light/80'
            }`}
          >
            {copySuccess ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs mt-2 text-center">
          {copySuccess ? 'Chave PIX copiada!' : 'Clique para copiar a chave PIX completa'}
        </p>
      </div>

      {/* Instructions */}
      <div className="text-center space-y-2">
        <p className="text-sm">
          💡 <strong>Dica:</strong> Você pode inserir qualquer valor na hora do pagamento
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Seguro</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>Instantâneo</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>Sem taxas</span>
          </span>
        </div>
      </div>
    </div>
  );
};