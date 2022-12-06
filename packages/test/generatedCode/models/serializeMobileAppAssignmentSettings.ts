import {MobileAppAssignmentSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentSettings(writer: SerializationWriter, mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {}) : void {
            writer.writeStringValue("@odata.type", mobileAppAssignmentSettings.odataType);
}
