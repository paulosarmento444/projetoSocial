import { WhatsApp } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

export function WhatsAppFloatButton({ phoneNumber, message }: any) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Tooltip title="Fale conosco no WhatsApp" placement="left">
      <Fab
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#25D366",
          color: "white",
          "&:hover": { bgcolor: "#128C7E", transform: "scale(1.1)" },
          transition: "all 0.3s ease",
        }}
      >
        <WhatsApp />
      </Fab>
    </Tooltip>
  );
}
