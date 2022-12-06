import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsPhone81CompliancePolicy} from './deserializeIntoWindowsPhone81CompliancePolicy';
import {WindowsPhone81CompliancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CompliancePolicyCollectionResponse(windowsPhone81CompliancePolicyCollectionResponse: WindowsPhone81CompliancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsPhone81CompliancePolicyCollectionResponse),
        "value": n => { windowsPhone81CompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsPhone81CompliancePolicy) as any ; },
    }
}
