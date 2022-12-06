import {LinkedResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLinkedResource} from './serializeLinkedResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResourceCollectionResponse(writer: SerializationWriter, linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, linkedResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", linkedResourceCollectionResponse.value as any, serializeLinkedResource);
}
