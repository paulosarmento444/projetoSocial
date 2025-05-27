"use client";

import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { CallToAction } from "./components/CallToAction";
import { DonationCampaign } from "./components/DonationCampaign";
import { MissionSection } from "./components/MissionSection";
import { WhatsAppFloatButton } from "./components/WhatsAppFloatButton";

export default function Home() {
  const marmitasEsteAno = 100;
  const familiasAjudadas = 50;
  const voluntariosAtivos = 20;
  const doacoesRecebidas = 1000;
  const valorPorMarmita = 10;
  const progressValue = 0;
  const numeroTelefone = "5535984331369";
  const mensagem =
    "Olá! Gostaria de saber mais sobre a Igreja AD Capão - CADCAF e como posso ajudar na campanha de marmitas.";

  return (
    <ThemeProvider>
      <Box sx={{ minHeight: "100vh", bgcolor: "#fafafa" }}>
        <Header />

        {/* Mission Section */}
        <MissionSection />

        {/* Donation Campaign */}
        <DonationCampaign
          marmitasEsteAno={marmitasEsteAno}
          familiasAjudadas={familiasAjudadas}
          voluntariosAtivos={voluntariosAtivos}
          doacoesRecebidas={doacoesRecebidas}
          valorPorMarmita={valorPorMarmita}
          progressValue={progressValue}
        />

        {/* Call to Action */}
        <CallToAction phoneNumber={numeroTelefone} message={mensagem} />

        {/* WhatsApp Float Button */}
        <WhatsAppFloatButton phoneNumber={numeroTelefone} message={mensagem} />
      </Box>
    </ThemeProvider>
  );
}
