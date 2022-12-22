import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {MailFolderCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolderCollectionResponse(mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { mailFolderCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { mailFolderCollectionResponse.value = n.getCollectionOfObjectValues(deserializeIntoMailFolder) as any ; },
    }
}
