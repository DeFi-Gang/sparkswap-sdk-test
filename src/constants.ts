import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xf61f7C93387D1e99250D9Ebe9F3a26b53B164950'

export const WETH = { 369: new Token(369, '0xa1077a294dde1b09bb078844df40758a5d0f9a27', 18, 'WPLS', 'Wrapped Pulse') }

export const ETHER = { ...Pulse.onChain(369), wrapped: WETH[369], chainId: 369, equals: Pulse.onChain(369).equals } as Pulse

export const INIT_CODE_HASH = '0x0eeb74fefe5667c2eef945c113bf051629ddee029deaf9a88556dceb240d07d9'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)
