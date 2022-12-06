import {MicrosoftStoreForBusinessAppAssignmentSettings} from './index';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftStoreForBusinessAppAssignmentSettings(writer: SerializationWriter, microsoftStoreForBusinessAppAssignmentSettings: MicrosoftStoreForBusinessAppAssignmentSettings | undefined = {}) : void {
        serializeMobileAppAssignmentSettings(writer, microsoftStoreForBusinessAppAssignmentSettings)
            writer.writeBooleanValue("useDeviceContext", microsoftStoreForBusinessAppAssignmentSettings.useDeviceContext);
}
