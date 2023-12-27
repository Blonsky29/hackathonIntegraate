import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  thunderTestnet,
  polygonMumbai,
  bsc,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import styled from 'styled-components';


const { chains, publicClient } = configureChains(
  [polygonMumbai, sepolia],
  [
    alchemyProvider({ apiKey: '2GehxEDmtkFbGfj3gweZBZhHwRdN7sWc' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const StyledConnectButton = styled(ConnectButton)`
  button{
    width: fit-content !important;
    min-width: fit-content;
  }
`
export default function ConnectWallet() {
  return (
    <StyledConnectButton />
  );
};
export { chains }