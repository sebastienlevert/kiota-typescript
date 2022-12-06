import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityBuiltInUserFlowAttribute} from './deserializeIntoIdentityBuiltInUserFlowAttribute';
import {IdentityBuiltInUserFlowAttributeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityBuiltInUserFlowAttributeCollectionResponse(identityBuiltInUserFlowAttributeCollectionResponse: IdentityBuiltInUserFlowAttributeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityBuiltInUserFlowAttributeCollectionResponse),
        "value": n => { identityBuiltInUserFlowAttributeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityBuiltInUserFlowAttribute) as any ; },
    }
}
