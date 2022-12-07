import {DocumentSetVersion} from './index';
import {serializeDocumentSetVersionItem} from './serializeDocumentSetVersionItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeListItemVersion} from './serializeListItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersion(writer: SerializationWriter, documentSetVersion: DocumentSetVersion | undefined = {}) : void {
        serializeListItemVersion(writer, documentSetVersion)
            writer.writeStringValue("comment", documentSetVersion.comment);
            writer.writeObjectValueFromMethod("createdBy", documentSetVersion.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", documentSetVersion.createdDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("items", documentSetVersion.items as any, serializeDocumentSetVersionItem);
            writer.writeBooleanValue("shouldCaptureMinorVersion", documentSetVersion.shouldCaptureMinorVersion);
}
