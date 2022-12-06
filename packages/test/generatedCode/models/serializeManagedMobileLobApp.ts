import {ManagedMobileLobApp} from './index';
import {serializeManagedApp} from './serializeManagedApp';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileLobApp(writer: SerializationWriter, managedMobileLobApp: ManagedMobileLobApp | undefined = {}) : void {
        serializeManagedApp(writer, managedMobileLobApp)
            writer.writeStringValue("committedContentVersion", managedMobileLobApp.committedContentVersion);
            writer.writeCollectionOfObjectValuesFromMethod("contentVersions", managedMobileLobApp.contentVersions as any, serializeMobileAppContent);
            writer.writeStringValue("fileName", managedMobileLobApp.fileName);
            writer.writeNumberValue("size", managedMobileLobApp.size);
}
