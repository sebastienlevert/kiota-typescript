import {ArchivePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArchivePostRequestBody(writer: SerializationWriter, archivePostRequestBody: ArchivePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", archivePostRequestBody.messageIds);
}
