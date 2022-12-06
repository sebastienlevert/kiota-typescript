import {MobileLobApp} from './index';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeMobileAppContent} from './serializeMobileAppContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileLobApp(writer: SerializationWriter, mobileLobApp: MobileLobApp | undefined = {}) : void {
        serializeMobileApp(writer, mobileLobApp)
            writer.writeStringValue("committedContentVersion", mobileLobApp.committedContentVersion);
            writer.writeCollectionOfObjectValuesFromMethod("contentVersions", mobileLobApp.contentVersions as any, serializeMobileAppContent);
            writer.writeStringValue("fileName", mobileLobApp.fileName);
            writer.writeNumberValue("size", mobileLobApp.size);
}
