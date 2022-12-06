import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse(mdmWindowsInformationProtectionPolicyCollectionResponse: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mdmWindowsInformationProtectionPolicyCollectionResponse),
        "value": n => { mdmWindowsInformationProtectionPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMdmWindowsInformationProtectionPolicy) as any ; },
    }
}
