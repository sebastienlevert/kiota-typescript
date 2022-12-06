import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {UnifiedGroupSourceCollectionResponse} from './index';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSourceCollectionResponse(writer: SerializationWriter, unifiedGroupSourceCollectionResponse: UnifiedGroupSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedGroupSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedGroupSourceCollectionResponse.value as any, serializeUnifiedGroupSource);
}
