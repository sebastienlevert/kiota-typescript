import {deserializeIntoAndroidCompliancePolicy} from './deserializeIntoAndroidCompliancePolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidCompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCompliancePolicyCollectionResponse(androidCompliancePolicyCollectionResponse: AndroidCompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidCompliancePolicyCollectionResponse),
        "value": n => { androidCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidCompliancePolicy) as any ; },
    }
}
