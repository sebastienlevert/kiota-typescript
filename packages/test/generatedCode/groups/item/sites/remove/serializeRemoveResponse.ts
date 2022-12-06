import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../../../models/serializeSite';
import {RemoveResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveResponse(writer: SerializationWriter, removeResponse: RemoveResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, removeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", removeResponse.value as any, serializeSite);
}
