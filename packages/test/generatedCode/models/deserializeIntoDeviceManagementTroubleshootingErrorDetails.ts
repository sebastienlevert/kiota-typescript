import {deserializeIntoDeviceManagementTroubleshootingErrorResource} from './deserializeIntoDeviceManagementTroubleshootingErrorResource';
import {DeviceManagementTroubleshootingErrorDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingErrorDetails(deviceManagementTroubleshootingErrorDetails: DeviceManagementTroubleshootingErrorDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "context": n => { deviceManagementTroubleshootingErrorDetails.context = n.getStringValue() as any ; },
        "failure": n => { deviceManagementTroubleshootingErrorDetails.failure = n.getStringValue() as any ; },
        "failureDetails": n => { deviceManagementTroubleshootingErrorDetails.failureDetails = n.getStringValue() as any ; },
        "remediation": n => { deviceManagementTroubleshootingErrorDetails.remediation = n.getStringValue() as any ; },
        "resources": n => { deviceManagementTroubleshootingErrorDetails.resources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementTroubleshootingErrorResource) as any ; },
    }
}
