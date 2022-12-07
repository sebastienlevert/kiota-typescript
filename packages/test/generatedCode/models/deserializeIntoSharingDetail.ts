import {deserializeIntoInsightIdentity} from './deserializeIntoInsightIdentity';
import {deserializeIntoResourceReference} from './deserializeIntoResourceReference';
import {SharingDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingDetail(sharingDetail: SharingDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "sharedBy": n => { sharingDetail.sharedBy = n.getObject(deserializeIntoInsightIdentity) as any ; },
        "sharedDateTime": n => { sharingDetail.sharedDateTime = n.getDateValue() as any ; },
        "sharingReference": n => { sharingDetail.sharingReference = n.getObject(deserializeIntoResourceReference) as any ; },
        "sharingSubject": n => { sharingDetail.sharingSubject = n.getStringValue() as any ; },
        "sharingType": n => { sharingDetail.sharingType = n.getStringValue() as any ; },
    }
}
