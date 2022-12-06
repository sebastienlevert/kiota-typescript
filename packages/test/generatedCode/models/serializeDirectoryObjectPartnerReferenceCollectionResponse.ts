import {DirectoryObjectPartnerReferenceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObjectPartnerReference} from './serializeDirectoryObjectPartnerReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectPartnerReferenceCollectionResponse(writer: SerializationWriter, directoryObjectPartnerReferenceCollectionResponse: DirectoryObjectPartnerReferenceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryObjectPartnerReferenceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryObjectPartnerReferenceCollectionResponse.value as any, serializeDirectoryObjectPartnerReference);
}
