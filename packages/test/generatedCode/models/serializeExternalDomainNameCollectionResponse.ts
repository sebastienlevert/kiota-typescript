import {ExternalDomainNameCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExternalDomainName} from './serializeExternalDomainName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainNameCollectionResponse(writer: SerializationWriter, externalDomainNameCollectionResponse: ExternalDomainNameCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalDomainNameCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", externalDomainNameCollectionResponse.value as any, serializeExternalDomainName);
}
