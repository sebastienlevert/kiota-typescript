import {MailFolderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMailFolder} from './serializeMailFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolderCollectionResponse(writer: SerializationWriter, mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mailFolderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mailFolderCollectionResponse.value as any, serializeMailFolder);
}
