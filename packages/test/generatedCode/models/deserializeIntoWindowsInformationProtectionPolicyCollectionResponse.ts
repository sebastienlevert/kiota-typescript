import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionPolicy} from './deserializeIntoWindowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionPolicyCollectionResponse(windowsInformationProtectionPolicyCollectionResponse: WindowsInformationProtectionPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionPolicyCollectionResponse),
        "value": n => { windowsInformationProtectionPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionPolicy) as any ; },
    }
}
