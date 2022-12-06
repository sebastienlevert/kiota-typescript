import {ServiceHealthCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceHealth} from './serializeServiceHealth';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthCollectionResponse(writer: SerializationWriter, serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", serviceHealthCollectionResponse.value as any, serializeServiceHealth);
}
