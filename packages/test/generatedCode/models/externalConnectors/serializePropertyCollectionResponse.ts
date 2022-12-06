import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {PropertyCollectionResponse} from './index';
import {serializeProperty} from './serializeProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePropertyCollectionResponse(writer: SerializationWriter, propertyCollectionResponse: PropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, propertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", propertyCollectionResponse.value as any, serializeProperty);
}
