import {deserializeIntoUser} from './deserializeIntoUser';
import {UserCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserCollectionResponse(userCollectionResponse: UserCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { userCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { userCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUser) as any ; },
    }
}
