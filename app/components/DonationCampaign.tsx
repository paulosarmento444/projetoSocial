import {
  Box,
  Card,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface DonationCampaignProps {
  progressValue: number;
  marmitasEsteAno: number;
  familiasAjudadas: number;
  voluntariosAtivos: number;
  doacoesRecebidas: number;
  valorPorMarmita: number;
}

export function DonationCampaign({
  progressValue,
  marmitasEsteAno,
  familiasAjudadas,
  voluntariosAtivos,
  doacoesRecebidas,
  valorPorMarmita,
}: Readonly<DonationCampaignProps>) {
  return (
    <Box sx={{ py: 8, bgcolor: "white" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{ color: "primary.main", mb: 2, fontWeight: 600 }}
          >
            Marmitas da Esperança
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.6 }}
          >
            Todos os domingos distribuímos marmitas para famílias necessitadas
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          <Image
            src="/images/ajuda-social.jpg?height=250&width=400"
            alt="Voluntários preparando marmitas"
            width={400}
            height={250}
            style={{ width: "100%", height: "auto", borderRadius: 12 }}
          />
          <Grid>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Como Funciona
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                🕐 <strong>Domingos às 8h:</strong> Preparação
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                🍽️ <strong>Refeição completa:</strong> Arroz, feijão, proteína
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                📍 <strong>Distribuição:</strong> Praça Central
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
              <strong>R$ {valorPorMarmita},00</strong> alimenta uma família
            </Typography>
          </Grid>
        </Grid>

        {/* Progress */}
        <Card sx={{ p: 4, textAlign: "center", mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Meta do Mês: 100 Marmitas
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 10,
              borderRadius: 5,
              mb: 2,
              "& .MuiLinearProgress-bar": { borderRadius: 5 },
            }}
          />
          <Typography variant="h6" color="secondary.main">
            {progressValue}% alcançado - {progressValue} marmitas doadas
          </Typography>
        </Card>

        {/* Impact Numbers */}
        <Grid container spacing={3} sx={{ textAlign: "center" }}>
          <Grid>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 700 }}
            >
              {marmitasEsteAno} +
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Marmitas este ano
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              {familiasAjudadas} +
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Famílias ajudadas
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 700 }}
            >
              {voluntariosAtivos} +
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Voluntários ativos
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              R$ {valorPorMarmita}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Por marmita
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 700 }}
            >
              R$ {doacoesRecebidas}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Doações recebidas
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
