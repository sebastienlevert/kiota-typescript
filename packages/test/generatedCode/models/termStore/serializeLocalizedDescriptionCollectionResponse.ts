import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {LocalizedDescriptionCollectionResponse} from './index';
import {serializeLocalizedDescription} from './serializeLocalizedDescription';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedDescriptionCollectionResponse(writer: SerializationWriter, localizedDescriptionCollectionResponse: LocalizedDescriptionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedDescriptionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", localizedDescriptionCollectionResponse.value as any, serializeLocalizedDescription);
}
