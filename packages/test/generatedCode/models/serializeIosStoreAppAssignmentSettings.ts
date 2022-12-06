import {IosStoreAppAssignmentSettings} from './index';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppAssignmentSettings(writer: SerializationWriter, iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {}) : void {
        serializeMobileAppAssignmentSettings(writer, iosStoreAppAssignmentSettings)
            writer.writeStringValue("vpnConfigurationId", iosStoreAppAssignmentSettings.vpnConfigurationId);
}
