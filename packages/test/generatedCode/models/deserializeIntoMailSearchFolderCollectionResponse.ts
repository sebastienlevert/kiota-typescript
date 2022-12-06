import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMailSearchFolder} from './deserializeIntoMailSearchFolder';
import {MailSearchFolderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailSearchFolderCollectionResponse(mailSearchFolderCollectionResponse: MailSearchFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mailSearchFolderCollectionResponse),
        "value": n => { mailSearchFolderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailSearchFolder) as any ; },
    }
}
