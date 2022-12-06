import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10CompliancePolicy} from './deserializeIntoWindows10CompliancePolicy';
import {Windows10CompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CompliancePolicyCollectionResponse(windows10CompliancePolicyCollectionResponse: Windows10CompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10CompliancePolicyCollectionResponse),
        "value": n => { windows10CompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10CompliancePolicy) as any ; },
    }
}
