import {EmailAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEmailAuthenticationMethod} from './serializeEmailAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodCollectionResponse(writer: SerializationWriter, emailAuthenticationMethodCollectionResponse: EmailAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, emailAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", emailAuthenticationMethodCollectionResponse.value as any, serializeEmailAuthenticationMethod);
}
