import {MacOSMinimumOperatingSystem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMinimumOperatingSystem(macOSMinimumOperatingSystem: MacOSMinimumOperatingSystem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { macOSMinimumOperatingSystem.odataType = n.getStringValue() as any ; },
        "v10_10": n => { macOSMinimumOperatingSystem.v10_10 = n.getBooleanValue() as any ; },
        "v10_11": n => { macOSMinimumOperatingSystem.v10_11 = n.getBooleanValue() as any ; },
        "v10_12": n => { macOSMinimumOperatingSystem.v10_12 = n.getBooleanValue() as any ; },
        "v10_13": n => { macOSMinimumOperatingSystem.v10_13 = n.getBooleanValue() as any ; },
        "v10_14": n => { macOSMinimumOperatingSystem.v10_14 = n.getBooleanValue() as any ; },
        "v10_15": n => { macOSMinimumOperatingSystem.v10_15 = n.getBooleanValue() as any ; },
        "v10_7": n => { macOSMinimumOperatingSystem.v10_7 = n.getBooleanValue() as any ; },
        "v10_8": n => { macOSMinimumOperatingSystem.v10_8 = n.getBooleanValue() as any ; },
        "v10_9": n => { macOSMinimumOperatingSystem.v10_9 = n.getBooleanValue() as any ; },
        "v11_0": n => { macOSMinimumOperatingSystem.v11_0 = n.getBooleanValue() as any ; },
        "v12_0": n => { macOSMinimumOperatingSystem.v12_0 = n.getBooleanValue() as any ; },
        "v13_0": n => { macOSMinimumOperatingSystem.v13_0 = n.getBooleanValue() as any ; },
    }
}
