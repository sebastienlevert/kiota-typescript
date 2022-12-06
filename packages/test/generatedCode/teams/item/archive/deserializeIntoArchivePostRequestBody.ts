import {ArchivePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivePostRequestBody(archivePostRequestBody: ArchivePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "shouldSetSpoSiteReadOnlyForMembers": n => { archivePostRequestBody.shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue() as any ; },
    }
}
