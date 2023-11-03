import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x955219A87eB0C6754fd247266af970F7d16906CD'

export const WETH = { 369: new Token(369, '0xa1077a294dde1b09bb078844df40758a5d0f9a27', 18, 'WPLS', 'Wrapped Pulse') }

export const ETHER = { ...Pulse.onChain(369), wrapped: WETH[369], chainId: 369, equals: Pulse.onChain(369).equals } as Pulse

export const INIT_CODE_HASH = '0xd98d5db929ea0eea7a1e5d6b95fe5a6bca2f96da961c8c025a31487e3354fd80'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)
