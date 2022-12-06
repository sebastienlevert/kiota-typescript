import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10MobileCompliancePolicy} from './deserializeIntoWindows10MobileCompliancePolicy';
import {Windows10MobileCompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10MobileCompliancePolicyCollectionResponse(windows10MobileCompliancePolicyCollectionResponse: Windows10MobileCompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10MobileCompliancePolicyCollectionResponse),
        "value": n => { windows10MobileCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10MobileCompliancePolicy) as any ; },
    }
}
