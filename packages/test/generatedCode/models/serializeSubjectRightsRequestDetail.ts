import {SubjectRightsRequestDetail} from './index';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestDetail(writer: SerializationWriter, subjectRightsRequestDetail: SubjectRightsRequestDetail | undefined = {}) : void {
            writer.writeNumberValue("excludedItemCount", subjectRightsRequestDetail.excludedItemCount);
            writer.writeCollectionOfObjectValuesFromMethod("insightCounts", subjectRightsRequestDetail.insightCounts as any, serializeKeyValuePair);
            writer.writeNumberValue("itemCount", subjectRightsRequestDetail.itemCount);
            writer.writeNumberValue("itemNeedReview", subjectRightsRequestDetail.itemNeedReview);
            writer.writeStringValue("@odata.type", subjectRightsRequestDetail.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("productItemCounts", subjectRightsRequestDetail.productItemCounts as any, serializeKeyValuePair);
            writer.writeNumberValue("signedOffItemCount", subjectRightsRequestDetail.signedOffItemCount);
            writer.writeNumberValue("totalItemSize", subjectRightsRequestDetail.totalItemSize);
}
