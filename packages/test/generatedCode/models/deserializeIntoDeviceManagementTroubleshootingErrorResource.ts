import {DeviceManagementTroubleshootingErrorResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingErrorResource(deviceManagementTroubleshootingErrorResource: DeviceManagementTroubleshootingErrorResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "link": n => { deviceManagementTroubleshootingErrorResource.link = n.getStringValue() as any ; },
        "text": n => { deviceManagementTroubleshootingErrorResource.text = n.getStringValue() as any ; },
    }
}
