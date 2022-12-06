import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExternalDomainName} from './deserializeIntoExternalDomainName';
import {ExternalDomainNameCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainNameCollectionResponse(externalDomainNameCollectionResponse: ExternalDomainNameCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(externalDomainNameCollectionResponse),
        "value": n => { externalDomainNameCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalDomainName) as any ; },
    }
}
