import {IosMinimumOperatingSystem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMinimumOperatingSystem(iosMinimumOperatingSystem: IosMinimumOperatingSystem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { iosMinimumOperatingSystem.odataType = n.getStringValue() as any ; },
        "v10_0": n => { iosMinimumOperatingSystem.v10_0 = n.getBooleanValue() as any ; },
        "v11_0": n => { iosMinimumOperatingSystem.v11_0 = n.getBooleanValue() as any ; },
        "v12_0": n => { iosMinimumOperatingSystem.v12_0 = n.getBooleanValue() as any ; },
        "v13_0": n => { iosMinimumOperatingSystem.v13_0 = n.getBooleanValue() as any ; },
        "v14_0": n => { iosMinimumOperatingSystem.v14_0 = n.getBooleanValue() as any ; },
        "v8_0": n => { iosMinimumOperatingSystem.v8_0 = n.getBooleanValue() as any ; },
        "v9_0": n => { iosMinimumOperatingSystem.v9_0 = n.getBooleanValue() as any ; },
    }
}
