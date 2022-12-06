import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosCompliancePolicy} from './deserializeIntoIosCompliancePolicy';
import {IosCompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCompliancePolicyCollectionResponse(iosCompliancePolicyCollectionResponse: IosCompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosCompliancePolicyCollectionResponse),
        "value": n => { iosCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosCompliancePolicy) as any ; },
    }
}
