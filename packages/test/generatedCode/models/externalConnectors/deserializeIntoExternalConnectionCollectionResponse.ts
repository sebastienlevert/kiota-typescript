import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExternalConnection} from './deserializeIntoExternalConnection';
import {ExternalConnectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalConnectionCollectionResponse(externalConnectionCollectionResponse: ExternalConnectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalConnectionCollectionResponse),
        "value": n => { externalConnectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalConnection) as any ; },
    }
}
