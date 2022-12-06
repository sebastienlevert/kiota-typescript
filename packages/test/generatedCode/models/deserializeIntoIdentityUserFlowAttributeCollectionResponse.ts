import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {IdentityUserFlowAttributeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeCollectionResponse(identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityUserFlowAttributeCollectionResponse),
        "value": n => { identityUserFlowAttributeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityUserFlowAttribute) as any ; },
    }
}
