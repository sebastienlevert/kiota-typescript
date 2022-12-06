import {VppTokenCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeVppToken} from './serializeVppToken';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVppTokenCollectionResponse(writer: SerializationWriter, vppTokenCollectionResponse: VppTokenCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, vppTokenCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", vppTokenCollectionResponse.value as any, serializeVppToken);
}
