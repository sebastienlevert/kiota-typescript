import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {SubjectRightsRequestDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestDetail(subjectRightsRequestDetail: SubjectRightsRequestDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludedItemCount": n => { subjectRightsRequestDetail.excludedItemCount = n.getNumberValue() as any ; },
        "insightCounts": n => { subjectRightsRequestDetail.insightCounts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "itemCount": n => { subjectRightsRequestDetail.itemCount = n.getNumberValue() as any ; },
        "itemNeedReview": n => { subjectRightsRequestDetail.itemNeedReview = n.getNumberValue() as any ; },
        "@odata.type": n => { subjectRightsRequestDetail.odataType = n.getStringValue() as any ; },
        "productItemCounts": n => { subjectRightsRequestDetail.productItemCounts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "signedOffItemCount": n => { subjectRightsRequestDetail.signedOffItemCount = n.getNumberValue() as any ; },
        "totalItemSize": n => { subjectRightsRequestDetail.totalItemSize = n.getNumberValue() as any ; },
    }
}
