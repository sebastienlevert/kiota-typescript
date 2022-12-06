import {InternalDomainFederationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalDomainFederationCollectionResponse(writer: SerializationWriter, internalDomainFederationCollectionResponse: InternalDomainFederationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, internalDomainFederationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", internalDomainFederationCollectionResponse.value as any, serializeInternalDomainFederation);
}
