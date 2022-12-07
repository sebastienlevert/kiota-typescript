import {DeviceManagementTroubleshootingErrorDetails} from './index';
import {serializeDeviceManagementTroubleshootingErrorResource} from './serializeDeviceManagementTroubleshootingErrorResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingErrorDetails(writer: SerializationWriter, deviceManagementTroubleshootingErrorDetails: DeviceManagementTroubleshootingErrorDetails | undefined = {}) : void {
            writer.writeStringValue("context", deviceManagementTroubleshootingErrorDetails.context);
            writer.writeStringValue("failure", deviceManagementTroubleshootingErrorDetails.failure);
            writer.writeStringValue("failureDetails", deviceManagementTroubleshootingErrorDetails.failureDetails);
            writer.writeStringValue("remediation", deviceManagementTroubleshootingErrorDetails.remediation);
            writer.writeCollectionOfObjectValuesFromMethod("resources", deviceManagementTroubleshootingErrorDetails.resources as any, serializeDeviceManagementTroubleshootingErrorResource);
}
