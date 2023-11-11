import styled from "styled-components";

const AppContainer = styled.div`
  filter: contrast(390%) brightness(100%);
  background: 
	  linear-gradient(332deg, rgba(59,59,166,1), rgba(27,117,114,0.24)),
	  url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.13' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  background-attachment: fixed;
  min-height: 100vh;
  padding: 1rem;
  text-align: center;
`

export default AppContainer;
