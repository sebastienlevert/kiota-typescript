import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionNetworkLearningSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionNetworkLearningSummary(windowsInformationProtectionNetworkLearningSummary: WindowsInformationProtectionNetworkLearningSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionNetworkLearningSummary),
        "deviceCount": n => { windowsInformationProtectionNetworkLearningSummary.deviceCount = n.getNumberValue() as any ; },
        "url": n => { windowsInformationProtectionNetworkLearningSummary.url = n.getStringValue() as any ; },
    }
}
