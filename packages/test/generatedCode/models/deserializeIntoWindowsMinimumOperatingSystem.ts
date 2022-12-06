import {WindowsMinimumOperatingSystem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMinimumOperatingSystem(windowsMinimumOperatingSystem: WindowsMinimumOperatingSystem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { windowsMinimumOperatingSystem.odataType = n.getStringValue() as any ; },
        "v10_0": n => { windowsMinimumOperatingSystem.v10_0 = n.getBooleanValue() as any ; },
        "v8_0": n => { windowsMinimumOperatingSystem.v8_0 = n.getBooleanValue() as any ; },
        "v8_1": n => { windowsMinimumOperatingSystem.v8_1 = n.getBooleanValue() as any ; },
    }
}
