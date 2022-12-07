import {DocumentSetContent} from './index';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetContent(writer: SerializationWriter, documentSetContent: DocumentSetContent | undefined = {}) : void {
            writer.writeObjectValueFromMethod("contentType", documentSetContent.contentType as any, serializeContentTypeInfo);
            writer.writeStringValue("fileName", documentSetContent.fileName);
            writer.writeStringValue("folderName", documentSetContent.folderName);
}
