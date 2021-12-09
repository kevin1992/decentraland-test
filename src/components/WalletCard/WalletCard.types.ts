import {BigNumber} from "ethers";

export type Props = {
  address: string
  balance: BigNumber | null
  symbol: string | null
  error: string | null
  loading: boolean
  onTransfer: () => void
}