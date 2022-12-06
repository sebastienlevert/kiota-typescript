import {ResourceActionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceAction} from './serializeResourceAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceActionCollectionResponse(writer: SerializationWriter, resourceActionCollectionResponse: ResourceActionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceActionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourceActionCollectionResponse.value as any, serializeResourceAction);
}
