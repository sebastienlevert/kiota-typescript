import {SoftwareOathAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethodCollectionResponse(writer: SerializationWriter, softwareOathAuthenticationMethodCollectionResponse: SoftwareOathAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, softwareOathAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", softwareOathAuthenticationMethodCollectionResponse.value as any, serializeSoftwareOathAuthenticationMethod);
}
