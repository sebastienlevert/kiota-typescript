import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentityApiConnector} from './deserializeIntoIdentityApiConnector';
import {IdentityApiConnectorCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityApiConnectorCollectionResponse(identityApiConnectorCollectionResponse: IdentityApiConnectorCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityApiConnectorCollectionResponse),
        "value": n => { identityApiConnectorCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityApiConnector) as any ; },
    }
}
