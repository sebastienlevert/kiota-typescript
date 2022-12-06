import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityCustomUserFlowAttribute} from './deserializeIntoIdentityCustomUserFlowAttribute';
import {IdentityCustomUserFlowAttributeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCustomUserFlowAttributeCollectionResponse(identityCustomUserFlowAttributeCollectionResponse: IdentityCustomUserFlowAttributeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityCustomUserFlowAttributeCollectionResponse),
        "value": n => { identityCustomUserFlowAttributeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityCustomUserFlowAttribute) as any ; },
    }
}
