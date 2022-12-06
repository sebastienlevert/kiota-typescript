import {IosVppAppAssignmentSettings} from './index';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppAppAssignmentSettings(writer: SerializationWriter, iosVppAppAssignmentSettings: IosVppAppAssignmentSettings | undefined = {}) : void {
        serializeMobileAppAssignmentSettings(writer, iosVppAppAssignmentSettings)
            writer.writeBooleanValue("useDeviceLicensing", iosVppAppAssignmentSettings.useDeviceLicensing);
            writer.writeStringValue("vpnConfigurationId", iosVppAppAssignmentSettings.vpnConfigurationId);
}
