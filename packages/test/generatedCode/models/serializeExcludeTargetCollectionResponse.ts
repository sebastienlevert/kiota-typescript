import {ExcludeTargetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExcludeTarget} from './serializeExcludeTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExcludeTargetCollectionResponse(writer: SerializationWriter, excludeTargetCollectionResponse: ExcludeTargetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, excludeTargetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", excludeTargetCollectionResponse.value as any, serializeExcludeTarget);
}
