import {MailFolderCollectionResponse} from './index';
import {serializeMailFolder} from './serializeMailFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolderCollectionResponse(writer: SerializationWriter, mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", mailFolderCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValues("value", mailFolderCollectionResponse.value as any, serializeMailFolder);
}
