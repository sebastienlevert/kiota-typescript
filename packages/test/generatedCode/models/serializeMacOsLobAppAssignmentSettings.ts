import {MacOsLobAppAssignmentSettings} from './index';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOsLobAppAssignmentSettings(writer: SerializationWriter, macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {}) : void {
        serializeMobileAppAssignmentSettings(writer, macOsLobAppAssignmentSettings)
            writer.writeBooleanValue("uninstallOnDeviceRemoval", macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval);
}
