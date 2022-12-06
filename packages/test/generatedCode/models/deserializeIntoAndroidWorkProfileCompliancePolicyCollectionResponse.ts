import {deserializeIntoAndroidWorkProfileCompliancePolicy} from './deserializeIntoAndroidWorkProfileCompliancePolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidWorkProfileCompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCompliancePolicyCollectionResponse(androidWorkProfileCompliancePolicyCollectionResponse: AndroidWorkProfileCompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidWorkProfileCompliancePolicyCollectionResponse),
        "value": n => { androidWorkProfileCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidWorkProfileCompliancePolicy) as any ; },
    }
}
