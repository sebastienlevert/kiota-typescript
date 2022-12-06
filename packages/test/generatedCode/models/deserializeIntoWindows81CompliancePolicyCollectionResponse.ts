import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows81CompliancePolicy} from './deserializeIntoWindows81CompliancePolicy';
import {Windows81CompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81CompliancePolicyCollectionResponse(windows81CompliancePolicyCollectionResponse: Windows81CompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows81CompliancePolicyCollectionResponse),
        "value": n => { windows81CompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows81CompliancePolicy) as any ; },
    }
}
