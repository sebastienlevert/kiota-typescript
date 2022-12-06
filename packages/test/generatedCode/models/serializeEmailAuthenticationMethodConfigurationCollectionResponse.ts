import {EmailAuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEmailAuthenticationMethodConfiguration} from './serializeEmailAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, emailAuthenticationMethodConfigurationCollectionResponse: EmailAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailAuthenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", emailAuthenticationMethodConfigurationCollectionResponse.value as any, serializeEmailAuthenticationMethodConfiguration);
}
