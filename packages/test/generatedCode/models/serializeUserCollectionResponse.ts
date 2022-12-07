import {UserCollectionResponse} from './index';
import {serializeUser} from './serializeUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserCollectionResponse(writer: SerializationWriter, userCollectionResponse: UserCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", userCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", userCollectionResponse.value as any, serializeUser);
}
