import {CopyToSectionGroupPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToSectionGroupPostRequestBody(copyToSectionGroupPostRequestBody: CopyToSectionGroupPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToSectionGroupPostRequestBody.groupId = n.getStringValue() as any ; },
        "id": n => { copyToSectionGroupPostRequestBody.id = n.getStringValue() as any ; },
        "renameAs": n => { copyToSectionGroupPostRequestBody.renameAs = n.getStringValue() as any ; },
        "siteCollectionId": n => { copyToSectionGroupPostRequestBody.siteCollectionId = n.getStringValue() as any ; },
        "siteId": n => { copyToSectionGroupPostRequestBody.siteId = n.getStringValue() as any ; },
    }
}
