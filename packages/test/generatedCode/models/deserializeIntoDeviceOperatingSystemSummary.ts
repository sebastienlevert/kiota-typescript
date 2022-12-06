import {DeviceOperatingSystemSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceOperatingSystemSummary(deviceOperatingSystemSummary: DeviceOperatingSystemSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "androidCorporateWorkProfileCount": n => { deviceOperatingSystemSummary.androidCorporateWorkProfileCount = n.getNumberValue() as any ; },
        "androidCount": n => { deviceOperatingSystemSummary.androidCount = n.getNumberValue() as any ; },
        "androidDedicatedCount": n => { deviceOperatingSystemSummary.androidDedicatedCount = n.getNumberValue() as any ; },
        "androidDeviceAdminCount": n => { deviceOperatingSystemSummary.androidDeviceAdminCount = n.getNumberValue() as any ; },
        "androidFullyManagedCount": n => { deviceOperatingSystemSummary.androidFullyManagedCount = n.getNumberValue() as any ; },
        "androidWorkProfileCount": n => { deviceOperatingSystemSummary.androidWorkProfileCount = n.getNumberValue() as any ; },
        "configMgrDeviceCount": n => { deviceOperatingSystemSummary.configMgrDeviceCount = n.getNumberValue() as any ; },
        "iosCount": n => { deviceOperatingSystemSummary.iosCount = n.getNumberValue() as any ; },
        "macOSCount": n => { deviceOperatingSystemSummary.macOSCount = n.getNumberValue() as any ; },
        "@odata.type": n => { deviceOperatingSystemSummary.odataType = n.getStringValue() as any ; },
        "unknownCount": n => { deviceOperatingSystemSummary.unknownCount = n.getNumberValue() as any ; },
        "windowsCount": n => { deviceOperatingSystemSummary.windowsCount = n.getNumberValue() as any ; },
        "windowsMobileCount": n => { deviceOperatingSystemSummary.windowsMobileCount = n.getNumberValue() as any ; },
    }
}
