import { Payment, VolunteerActivism, WhatsApp } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography, Card } from "@mui/material";

interface CallToActionProps {
  phoneNumber: string;
  message: string;
}

export function CallToAction({ phoneNumber, message }: CallToActionProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const helpOptions = [
    {
      icon: Payment,
      title: "Doar",
      label: "Doar Agora",
      color: "secondary.main",
    },
    {
      icon: VolunteerActivism,
      title: "Voluntário",
      label: "Participar",
      color: "primary.main",
    },
    {
      icon: WhatsApp,
      title: "Contato",
      label: "WhatsApp",
      color: "#25D366",
      hoverColor: "#128C7E",
    },
  ];

  const donationValues = [
    { label: "R$ 10,00", value: 10 },
    { label: "R$ 40,00", value: 40 },
    { label: "Outro Valor", variant: "outlined" as const },
  ];
  return (
    <Box sx={{ py: 6, bgcolor: "#f8f9fa" }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            component="h2"
            color="primary.main"
            fontWeight={600}
            mb={1}
          >
            Como Ajudar
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Escolha uma forma de participar
          </Typography>
        </Box>

        {/* Help Options */}
        <Grid
          container
          spacing={3}
          mb={4}
          alignItems="center"
          justifyContent="center"
        >
          {helpOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Grid
                key={index + 1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: 40,
                      color: option.color,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight={500} mb={2} flexGrow={1}>
                    {option.title}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleWhatsAppClick}
                    sx={
                      option.hoverColor
                        ? {
                            bgcolor: option.color,
                            "&:hover": {
                              bgcolor: option.hoverColor,
                            },
                          }
                        : {}
                    }
                  >
                    {option.label}
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Urgent Call */}
        <Card
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={1}>
            🚨 Ajuda Urgente!
          </Typography>
          <Typography variant="body1" mb={3} sx={{ opacity: 0.9 }}>
            Precisamos de 100 marmitas extras para este domingo
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {donationValues.map((donation, index) => (
              <Button
                key={index + 1}
                variant={donation.variant || "contained"}
                onClick={handleWhatsAppClick}
                sx={{
                  minWidth: 120,
                  ...(donation.variant === "outlined"
                    ? {
                        borderColor: "white",
                        color: "white",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderColor: "white",
                        },
                      }
                    : {
                        bgcolor: "white",
                        color: "primary.main",
                        "&:hover": {
                          bgcolor: "grey.100",
                        },
                      }),
                }}
              >
                {donation.label}
              </Button>
            ))}
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
