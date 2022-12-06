import {PreAuthorizedApplicationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePreAuthorizedApplication} from './serializePreAuthorizedApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePreAuthorizedApplicationCollectionResponse(writer: SerializationWriter, preAuthorizedApplicationCollectionResponse: PreAuthorizedApplicationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, preAuthorizedApplicationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", preAuthorizedApplicationCollectionResponse.value as any, serializePreAuthorizedApplication);
}
