import {ArchivePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { archivePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
