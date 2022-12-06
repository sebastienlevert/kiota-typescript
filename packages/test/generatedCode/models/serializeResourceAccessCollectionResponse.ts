import {ResourceAccessCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceAccess} from './serializeResourceAccess';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceAccessCollectionResponse(writer: SerializationWriter, resourceAccessCollectionResponse: ResourceAccessCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceAccessCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourceAccessCollectionResponse.value as any, serializeResourceAccess);
}
