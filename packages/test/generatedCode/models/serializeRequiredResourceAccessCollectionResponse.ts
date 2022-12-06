import {RequiredResourceAccessCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRequiredResourceAccess} from './serializeRequiredResourceAccess';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequiredResourceAccessCollectionResponse(writer: SerializationWriter, requiredResourceAccessCollectionResponse: RequiredResourceAccessCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, requiredResourceAccessCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", requiredResourceAccessCollectionResponse.value as any, serializeRequiredResourceAccess);
}
