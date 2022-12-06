import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {GroupCollectionResponse} from './index';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupCollectionResponse(writer: SerializationWriter, groupCollectionResponse: GroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", groupCollectionResponse.value as any, serializeGroup);
}
