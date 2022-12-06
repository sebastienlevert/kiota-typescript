import {SamlOrWsFedProviderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSamlOrWsFedProvider} from './serializeSamlOrWsFedProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedProviderCollectionResponse(writer: SerializationWriter, samlOrWsFedProviderCollectionResponse: SamlOrWsFedProviderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, samlOrWsFedProviderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", samlOrWsFedProviderCollectionResponse.value as any, serializeSamlOrWsFedProvider);
}
