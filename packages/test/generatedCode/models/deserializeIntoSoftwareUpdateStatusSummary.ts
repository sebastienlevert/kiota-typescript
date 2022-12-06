import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SoftwareUpdateStatusSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareUpdateStatusSummary(softwareUpdateStatusSummary: SoftwareUpdateStatusSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(softwareUpdateStatusSummary),
        "compliantDeviceCount": n => { softwareUpdateStatusSummary.compliantDeviceCount = n.getNumberValue() as any ; },
        "compliantUserCount": n => { softwareUpdateStatusSummary.compliantUserCount = n.getNumberValue() as any ; },
        "conflictDeviceCount": n => { softwareUpdateStatusSummary.conflictDeviceCount = n.getNumberValue() as any ; },
        "conflictUserCount": n => { softwareUpdateStatusSummary.conflictUserCount = n.getNumberValue() as any ; },
        "displayName": n => { softwareUpdateStatusSummary.displayName = n.getStringValue() as any ; },
        "errorDeviceCount": n => { softwareUpdateStatusSummary.errorDeviceCount = n.getNumberValue() as any ; },
        "errorUserCount": n => { softwareUpdateStatusSummary.errorUserCount = n.getNumberValue() as any ; },
        "nonCompliantDeviceCount": n => { softwareUpdateStatusSummary.nonCompliantDeviceCount = n.getNumberValue() as any ; },
        "nonCompliantUserCount": n => { softwareUpdateStatusSummary.nonCompliantUserCount = n.getNumberValue() as any ; },
        "notApplicableDeviceCount": n => { softwareUpdateStatusSummary.notApplicableDeviceCount = n.getNumberValue() as any ; },
        "notApplicableUserCount": n => { softwareUpdateStatusSummary.notApplicableUserCount = n.getNumberValue() as any ; },
        "remediatedDeviceCount": n => { softwareUpdateStatusSummary.remediatedDeviceCount = n.getNumberValue() as any ; },
        "remediatedUserCount": n => { softwareUpdateStatusSummary.remediatedUserCount = n.getNumberValue() as any ; },
        "unknownDeviceCount": n => { softwareUpdateStatusSummary.unknownDeviceCount = n.getNumberValue() as any ; },
        "unknownUserCount": n => { softwareUpdateStatusSummary.unknownUserCount = n.getNumberValue() as any ; },
    }
}
