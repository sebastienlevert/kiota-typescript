import {ExtensionProperty} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionProperty(writer: SerializationWriter, extensionProperty: ExtensionProperty | undefined = {}) : void {
        serializeDirectoryObject(writer, extensionProperty)
            writer.writeStringValue("appDisplayName", extensionProperty.appDisplayName);
            writer.writeStringValue("dataType", extensionProperty.dataType);
            writer.writeBooleanValue("isSyncedFromOnPremises", extensionProperty.isSyncedFromOnPremises);
            writer.writeStringValue("name", extensionProperty.name);
            writer.writeCollectionOfPrimitiveValues<string>("targetObjects", extensionProperty.targetObjects);
}
