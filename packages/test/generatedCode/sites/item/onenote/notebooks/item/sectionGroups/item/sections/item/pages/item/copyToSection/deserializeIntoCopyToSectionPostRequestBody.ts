import {CopyToSectionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToSectionPostRequestBody(copyToSectionPostRequestBody: CopyToSectionPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToSectionPostRequestBody.groupId = n.getStringValue() as any ; },
        "id": n => { copyToSectionPostRequestBody.id = n.getStringValue() as any ; },
        "siteCollectionId": n => { copyToSectionPostRequestBody.siteCollectionId = n.getStringValue() as any ; },
        "siteId": n => { copyToSectionPostRequestBody.siteId = n.getStringValue() as any ; },
    }
}
