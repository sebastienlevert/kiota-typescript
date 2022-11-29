import {MailFolder, MailFolderCollectionResponse} from './index';
import {MailFolder} from './mailFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolderCollectionResponse(mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { MailFolderCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { MailFolderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<MailFolder>(deserializeIntoMailFolder); },
    }
}
