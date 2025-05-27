import { Favorite, Groups, PanTool } from "@mui/icons-material";
import { Box, Card, Container, Typography } from "@mui/material";

export function MissionSection() {
  return (
    <Box sx={{ py: 8, bgcolor: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "primary.main", mb: 2, fontWeight: 600 }}
        >
          Nossa Missão
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ color: "text.secondary", mb: 6, lineHeight: 1.6 }}
        >
          Levamos esperança e amor para nossa comunidade através de ações
          concretas
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              flex: { xs: "1 1 100%", sm: "1 1 30%" },
            }}
          >
            <Favorite sx={{ fontSize: 40, color: "secondary.main", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Amor ao Próximo
            </Typography>
            <Typography color="text.secondary">
              Acolhemos todos com amor incondicional e apoio espiritual
            </Typography>
          </Card>

          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              flex: { xs: "1 1 100%", sm: "1 1 30%" },
            }}
          >
            <PanTool sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Ação Social
            </Typography>
            <Typography color="text.secondary">
              Desenvolvemos projetos que transformam vidas na comunidade
            </Typography>
          </Card>

          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              flex: { xs: "1 1 100%", sm: "1 1 30%" },
            }}
          >
            <Groups sx={{ fontSize: 40, color: "secondary.main", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Comunidade
            </Typography>
            <Typography color="text.secondary">
              Uma família espiritual onde todos têm seu lugar
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
