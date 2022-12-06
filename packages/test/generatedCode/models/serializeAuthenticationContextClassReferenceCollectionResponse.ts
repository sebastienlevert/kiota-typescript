import {AuthenticationContextClassReferenceCollectionResponse} from './index';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationContextClassReferenceCollectionResponse(writer: SerializationWriter, authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationContextClassReferenceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authenticationContextClassReferenceCollectionResponse.value as any, serializeAuthenticationContextClassReference);
}
