import {OpenShiftChangeRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOpenShiftChangeRequest} from './serializeOpenShiftChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftChangeRequestCollectionResponse(writer: SerializationWriter, openShiftChangeRequestCollectionResponse: OpenShiftChangeRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openShiftChangeRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", openShiftChangeRequestCollectionResponse.value as any, serializeOpenShiftChangeRequest);
}
