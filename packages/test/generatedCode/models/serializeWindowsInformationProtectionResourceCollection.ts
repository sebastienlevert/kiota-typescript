import {WindowsInformationProtectionResourceCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionResourceCollection(writer: SerializationWriter, windowsInformationProtectionResourceCollection: WindowsInformationProtectionResourceCollection | undefined = {}) : void {
            writer.writeStringValue("displayName", windowsInformationProtectionResourceCollection.displayName);
            writer.writeStringValue("@odata.type", windowsInformationProtectionResourceCollection.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("resources", windowsInformationProtectionResourceCollection.resources);
}
