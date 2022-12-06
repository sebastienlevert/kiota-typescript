import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSCompliancePolicy} from './deserializeIntoMacOSCompliancePolicy';
import {MacOSCompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCompliancePolicyCollectionResponse(macOSCompliancePolicyCollectionResponse: MacOSCompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSCompliancePolicyCollectionResponse),
        "value": n => { macOSCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSCompliancePolicy) as any ; },
    }
}
