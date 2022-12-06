import {TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTemporaryAccessPassAuthenticationMethodConfiguration} from './serializeTemporaryAccessPassAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse: TemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", temporaryAccessPassAuthenticationMethodConfigurationCollectionResponse.value as any, serializeTemporaryAccessPassAuthenticationMethodConfiguration);
}
