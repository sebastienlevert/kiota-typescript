import {OpenShiftCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOpenShift} from './serializeOpenShift';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftCollectionResponse(writer: SerializationWriter, openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", openShiftCollectionResponse.value as any, serializeOpenShift);
}
