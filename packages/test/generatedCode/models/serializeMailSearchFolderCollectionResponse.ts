import {MailSearchFolderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMailSearchFolder} from './serializeMailSearchFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailSearchFolderCollectionResponse(writer: SerializationWriter, mailSearchFolderCollectionResponse: MailSearchFolderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mailSearchFolderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mailSearchFolderCollectionResponse.value as any, serializeMailSearchFolder);
}
