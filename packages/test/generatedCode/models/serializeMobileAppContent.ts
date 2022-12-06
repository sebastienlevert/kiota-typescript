import {MobileAppContent} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppContentFile} from './serializeMobileAppContentFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppContent(writer: SerializationWriter, mobileAppContent: MobileAppContent | undefined = {}) : void {
        serializeEntity(writer, mobileAppContent)
            writer.writeCollectionOfObjectValuesFromMethod("files", mobileAppContent.files as any, serializeMobileAppContentFile);
}
