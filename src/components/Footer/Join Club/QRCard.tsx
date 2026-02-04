import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import joinQR from "@/assets/join-qr.png";

const QRCard = () => {
  return (
    <div className="flex justify-center">
      <Card className="glass-card hover:glow-effect transition-all duration-300 max-w-sm w-full">
        <CardContent className="p-8 text-center">
          <QrCode className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Quick Join
          </h3>
          <div className="bg-white p-4 rounded-2xl mb-4 inline-block">
            <img
              src={joinQR}
              alt="Join Club QR Code"
              className="w-48 h-48 mx-auto"
            />
          </div>
          <p className="text-muted-foreground text-sm">
            Scan this QR code with your phone to join our WhatsApp group and get
            instant updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRCard;
