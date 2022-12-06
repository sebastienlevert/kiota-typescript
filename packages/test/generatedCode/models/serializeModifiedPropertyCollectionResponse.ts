import {ModifiedPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeModifiedPropertyCollectionResponse(writer: SerializationWriter, modifiedPropertyCollectionResponse: ModifiedPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, modifiedPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", modifiedPropertyCollectionResponse.value as any, serializeModifiedProperty);
}
