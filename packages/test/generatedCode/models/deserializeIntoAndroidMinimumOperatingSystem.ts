import {AndroidMinimumOperatingSystem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidMinimumOperatingSystem(androidMinimumOperatingSystem: AndroidMinimumOperatingSystem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { androidMinimumOperatingSystem.odataType = n.getStringValue() as any ; },
        "v10_0": n => { androidMinimumOperatingSystem.v10_0 = n.getBooleanValue() as any ; },
        "v11_0": n => { androidMinimumOperatingSystem.v11_0 = n.getBooleanValue() as any ; },
        "v4_0": n => { androidMinimumOperatingSystem.v4_0 = n.getBooleanValue() as any ; },
        "v4_0_3": n => { androidMinimumOperatingSystem.v4_0_3 = n.getBooleanValue() as any ; },
        "v4_1": n => { androidMinimumOperatingSystem.v4_1 = n.getBooleanValue() as any ; },
        "v4_2": n => { androidMinimumOperatingSystem.v4_2 = n.getBooleanValue() as any ; },
        "v4_3": n => { androidMinimumOperatingSystem.v4_3 = n.getBooleanValue() as any ; },
        "v4_4": n => { androidMinimumOperatingSystem.v4_4 = n.getBooleanValue() as any ; },
        "v5_0": n => { androidMinimumOperatingSystem.v5_0 = n.getBooleanValue() as any ; },
        "v5_1": n => { androidMinimumOperatingSystem.v5_1 = n.getBooleanValue() as any ; },
        "v6_0": n => { androidMinimumOperatingSystem.v6_0 = n.getBooleanValue() as any ; },
        "v7_0": n => { androidMinimumOperatingSystem.v7_0 = n.getBooleanValue() as any ; },
        "v7_1": n => { androidMinimumOperatingSystem.v7_1 = n.getBooleanValue() as any ; },
        "v8_0": n => { androidMinimumOperatingSystem.v8_0 = n.getBooleanValue() as any ; },
        "v8_1": n => { androidMinimumOperatingSystem.v8_1 = n.getBooleanValue() as any ; },
        "v9_0": n => { androidMinimumOperatingSystem.v9_0 = n.getBooleanValue() as any ; },
    }
}
