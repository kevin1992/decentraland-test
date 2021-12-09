import {BigNumber} from 'ethers'

export type TokenState = {
  balance: BigNumber | null
  symbol: string | null
  loading_balance: boolean
  loading_transfer: boolean
  error_balance: string | null
  error_transfer: string | null
}