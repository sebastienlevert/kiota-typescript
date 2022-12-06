import {deserializeIntoB2xIdentityUserFlow} from './deserializeIntoB2xIdentityUserFlow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {B2xIdentityUserFlowCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoB2xIdentityUserFlowCollectionResponse(b2xIdentityUserFlowCollectionResponse: B2xIdentityUserFlowCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(b2xIdentityUserFlowCollectionResponse),
        "value": n => { b2xIdentityUserFlowCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoB2xIdentityUserFlow) as any ; },
    }
}
