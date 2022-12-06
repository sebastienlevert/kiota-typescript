import {GetPolicyNonComplianceMetadataPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody(getPolicyNonComplianceMetadataPostRequestBody: GetPolicyNonComplianceMetadataPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceMetadataPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getPolicyNonComplianceMetadataPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getPolicyNonComplianceMetadataPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getPolicyNonComplianceMetadataPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getPolicyNonComplianceMetadataPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getPolicyNonComplianceMetadataPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getPolicyNonComplianceMetadataPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getPolicyNonComplianceMetadataPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getPolicyNonComplianceMetadataPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
