import React, { useState, useEffect } from "react";

interface QRCodePIXProps {
  className?: string;
  pixKey?: string;
  name?: string;
  city?: string;
  description?: string;
  amount?: string;
}

function tlv(id: string, value: string) {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function buildPixPayload({
  pixKey,
  name,
  city,
  description,
  amount,
}: Required<Pick<QRCodePIXProps, "pixKey" | "name" | "city">> &
  Pick<QRCodePIXProps, "description" | "amount">) {
  const payloadFormat = tlv("00", "01");
  const poiMethod = tlv("01", "11");

  const gui = tlv("00", "br.gov.bcb.pix");
  const key = tlv("01", pixKey);
  const desc = description ? tlv("02", description) : "";
  const mai = tlv("26", gui + key + desc);

  const mcc = tlv("52", "0000");
  const currency = tlv("53", "986");
  const country = tlv("58", "BR");
  const merchantName = tlv("59", name.toUpperCase().slice(0, 25));
  const merchantCity = tlv("60", city);
  const amountField = amount ? tlv("54", amount) : "";

  const partial =
    payloadFormat +
    poiMethod +
    mai +
    mcc +
    currency +
    (amountField || "") +
    country +
    merchantName +
    merchantCity +
    "6304";
  const crc = crc16(partial);
  return partial + crc;
}

export const QRCodePIX: React.FC<QRCodePIXProps> = ({
  className = "",
  pixKey = "da28fedd-af6e-47ad-b5c4-0ac612b938425",
  name = "VINICIUS DOS SANTOS REIS",
  city = "Sao Paulo",
  description,
  amount,
}) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const fixedPayload =
    "00020126580014br.gov.bcb.pix0136da28fedd-af6e-47ad-b5c4-0ac612b938425204000053039865802BR5924VINICIUS DOS SANTOS REIS6009Sao Paulo62290525REC68F97269655038439720876304CAB6";
  const pixPayload =
    pixKey === "da28fedd-af6e-47ad-b5c4-0ac612b938425" &&
    name === "VINICIUS DOS SANTOS REIS" &&
    city === "Sao Paulo" &&
    !description &&
    !amount
      ? fixedPayload
      : buildPixPayload({ pixKey, name, city, description, amount });

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setIsLoading(true);
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
          pixPayload
        )}`;
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error("Erro ao gerar QR Code:", error);
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pixPayload]);

  const copyPixPayload = async () => {
    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar Pix Copia e Cola:", error);
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
              console.error("Erro ao carregar QR Code");
            }}
          />
        )}
      </div>

      {/* PIX Copy Section */}
      <div className="w-full max-w-md">
        <p className="text-sm font-medium mb-2 text-center">
          Copia e Cola (PIX):
        </p>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-secondary-light dark:bg-background-dark border border-zinc-300 dark:border-zinc-800 rounded-lg p-3 text-xs font-mono break-all">
            {pixPayload.substring(0, 50)}...
          </div>
          <button
            onClick={copyPixPayload}
            className={`px-4 py-2.5 flex items-center gap-2 rounded-xl font-medium transition-colors ${
              copySuccess
                ? "bg-green-500 text-white"
                : "bg-primary-dark dark:bg-primary-light text-white dark:text-black hover:bg-primary-dark/80 hover:dark:bg-primary-light/80"
            }`}
          >
            {copySuccess ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs mt-2 text-center">
          {copySuccess
            ? "Copia e Cola copiado!"
            : "Clique para copiar o Pix Copia e Cola completo"}
        </p>
      </div>

      {/* Instructions */}
      <div className="text-center space-y-2">
        <p className="text-sm">
          💡 <strong>Dica:</strong> Você pode inserir qualquer valor na hora do
          pagamento
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Seguro</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Instantâneo</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sem taxas</span>
          </span>
        </div>
      </div>
    </div>
  );
};
