import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodCollectionResponse(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, temporaryAccessPassAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", temporaryAccessPassAuthenticationMethodCollectionResponse.value as any, serializeTemporaryAccessPassAuthenticationMethod);
}
