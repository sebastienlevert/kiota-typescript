import {ActionState} from './actionState';
import {CloudPcRemoteActionResult} from './index';
import {serializeCloudPcStatusDetails} from './serializeCloudPcStatusDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcRemoteActionResult(writer: SerializationWriter, cloudPcRemoteActionResult: CloudPcRemoteActionResult | undefined = {}) : void {
            writer.writeStringValue("actionName", cloudPcRemoteActionResult.actionName);
            writer.writeEnumValue<ActionState>("actionState", cloudPcRemoteActionResult.actionState);
            writer.writeStringValue("cloudPcId", cloudPcRemoteActionResult.cloudPcId);
            writer.writeDateValue("lastUpdatedDateTime", cloudPcRemoteActionResult.lastUpdatedDateTime);
            writer.writeStringValue("managedDeviceId", cloudPcRemoteActionResult.managedDeviceId);
            writer.writeDateValue("startDateTime", cloudPcRemoteActionResult.startDateTime);
            writer.writeObjectValueFromMethod("statusDetails", cloudPcRemoteActionResult.statusDetails as any, serializeCloudPcStatusDetails);
}
