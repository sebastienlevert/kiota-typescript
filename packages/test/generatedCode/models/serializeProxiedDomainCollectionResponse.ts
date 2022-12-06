import {ProxiedDomainCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProxiedDomain} from './serializeProxiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProxiedDomainCollectionResponse(writer: SerializationWriter, proxiedDomainCollectionResponse: ProxiedDomainCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, proxiedDomainCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", proxiedDomainCollectionResponse.value as any, serializeProxiedDomain);
}
