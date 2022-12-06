import {MicrosoftStoreForBusinessAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftStoreForBusinessApp} from './serializeMicrosoftStoreForBusinessApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftStoreForBusinessAppCollectionResponse(writer: SerializationWriter, microsoftStoreForBusinessAppCollectionResponse: MicrosoftStoreForBusinessAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftStoreForBusinessAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", microsoftStoreForBusinessAppCollectionResponse.value as any, serializeMicrosoftStoreForBusinessApp);
}
