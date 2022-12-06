import {SignInCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSignIn} from './serializeSignIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInCollectionResponse(writer: SerializationWriter, signInCollectionResponse: SignInCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, signInCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", signInCollectionResponse.value as any, serializeSignIn);
}
