import {
	useAccount,
  useReadContract,
} from "wagmi";
import {
  useConnectModal,
} from '@rainbow-me/rainbowkit';
import ClaimForm from "./ClaimForm";
import EligibilityCheck from "./EligibilityCheck";


const VaultInfo = (): React.ReactElement => {
  const { address: walletAddress, isConnected, chain } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div className="page-block">
      <h1>Testnet Funding Vault</h1>
      <p>
        The FundingVault contract provides a way to distribute continuous limited amounts of funds to authorized entities.<br />
        The distribution is time gated and a specific limit per grant is enforced.
      </p>
      {isConnected && chain ?
      <EligibilityCheck /> : null}
      {!isConnected ? renderDisconnected() : null}
      {isConnected && !chain ?  renderInvalidNetwork() : null}

    </div>
  )

  function renderDisconnected() {
    return (
      <div className="">
        Please <a href="#" onClick={openConnectModal}>connect to your wallet</a> to continue.
      </div>
    )
  }

  function renderInvalidNetwork() {
    return (
      <div className="">
        Please switch to holesky or sepolia to continue.
      </div>
    )
  }
}

export default VaultInfo;