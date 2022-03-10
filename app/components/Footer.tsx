import { styled } from "~/stitches.config";
import { WrapNav } from "./Navbar";

function Footer() {
  return (
    <FooterStyled css={{ border: " none", position: "relative" }}>
      <p>❤️ Powered by RDev 👨‍💻</p>
    </FooterStyled>
  );
}

const FooterStyled = styled(WrapNav, {
  position: "relative",
  justifyContent: "center",
  zIndex: "unset",
  py: "2rem",
});

export { Footer };
