import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {MailFolderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolderCollectionResponse(mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mailFolderCollectionResponse),
        "value": n => { mailFolderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailFolder) as any ; },
    }
}
