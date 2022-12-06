import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityUserFlowAttributeAssignment} from './deserializeIntoIdentityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse(identityUserFlowAttributeAssignmentCollectionResponse: IdentityUserFlowAttributeAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityUserFlowAttributeAssignmentCollectionResponse),
        "value": n => { identityUserFlowAttributeAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityUserFlowAttributeAssignment) as any ; },
    }
}
