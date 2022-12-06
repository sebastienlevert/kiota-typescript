import {ApplicationType} from './applicationType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionAppLearningSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLearningSummary(windowsInformationProtectionAppLearningSummary: WindowsInformationProtectionAppLearningSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionAppLearningSummary),
        "applicationName": n => { windowsInformationProtectionAppLearningSummary.applicationName = n.getStringValue() as any ; },
        "applicationType": n => { windowsInformationProtectionAppLearningSummary.applicationType = n.getEnumValue<ApplicationType>(ApplicationType) as any ; },
        "deviceCount": n => { windowsInformationProtectionAppLearningSummary.deviceCount = n.getNumberValue() as any ; },
    }
}
