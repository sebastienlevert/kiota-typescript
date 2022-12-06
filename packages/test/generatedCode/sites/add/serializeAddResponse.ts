import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../models/serializeSite';
import {AddResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddResponse(writer: SerializationWriter, addResponse: AddResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", addResponse.value as any, serializeSite);
}
