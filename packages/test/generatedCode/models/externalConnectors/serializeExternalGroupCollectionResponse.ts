import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalGroupCollectionResponse} from './index';
import {serializeExternalGroup} from './serializeExternalGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalGroupCollectionResponse(writer: SerializationWriter, externalGroupCollectionResponse: ExternalGroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalGroupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", externalGroupCollectionResponse.value as any, serializeExternalGroup);
}
