import {RelatedContactCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRelatedContact} from './serializeRelatedContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelatedContactCollectionResponse(writer: SerializationWriter, relatedContactCollectionResponse: RelatedContactCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, relatedContactCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", relatedContactCollectionResponse.value as any, serializeRelatedContact);
}
