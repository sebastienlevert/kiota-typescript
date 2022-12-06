import {ServicePrincipalCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServicePrincipal} from './serializeServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalCollectionResponse(writer: SerializationWriter, servicePrincipalCollectionResponse: ServicePrincipalCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, servicePrincipalCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", servicePrincipalCollectionResponse.value as any, serializeServicePrincipal);
}
