import {DeviceManagementTroubleshootingErrorResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingErrorResource(writer: SerializationWriter, deviceManagementTroubleshootingErrorResource: DeviceManagementTroubleshootingErrorResource | undefined = {}) : void {
            writer.writeStringValue("link", deviceManagementTroubleshootingErrorResource.link);
            writer.writeStringValue("text", deviceManagementTroubleshootingErrorResource.text);
}
