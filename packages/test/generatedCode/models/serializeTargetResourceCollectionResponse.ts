import {TargetResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetResource} from './serializeTargetResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetResourceCollectionResponse(writer: SerializationWriter, targetResourceCollectionResponse: TargetResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", targetResourceCollectionResponse.value as any, serializeTargetResource);
}
