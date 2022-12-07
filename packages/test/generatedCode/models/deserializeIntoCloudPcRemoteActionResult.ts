import {ActionState} from './actionState';
import {deserializeIntoCloudPcStatusDetails} from './deserializeIntoCloudPcStatusDetails';
import {CloudPcRemoteActionResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcRemoteActionResult(cloudPcRemoteActionResult: CloudPcRemoteActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "actionName": n => { cloudPcRemoteActionResult.actionName = n.getStringValue() as any ; },
        "actionState": n => { cloudPcRemoteActionResult.actionState = n.getEnumValue<ActionState>(ActionState) as any ; },
        "cloudPcId": n => { cloudPcRemoteActionResult.cloudPcId = n.getStringValue() as any ; },
        "lastUpdatedDateTime": n => { cloudPcRemoteActionResult.lastUpdatedDateTime = n.getDateValue() as any ; },
        "managedDeviceId": n => { cloudPcRemoteActionResult.managedDeviceId = n.getStringValue() as any ; },
        "startDateTime": n => { cloudPcRemoteActionResult.startDateTime = n.getDateValue() as any ; },
        "statusDetails": n => { cloudPcRemoteActionResult.statusDetails = n.getObject(deserializeIntoCloudPcStatusDetails) as any ; },
    }
}
