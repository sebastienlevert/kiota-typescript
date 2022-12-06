import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAuditActivityTypesWithCategoryResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditActivityTypesWithCategoryResponse(writer: SerializationWriter, getAuditActivityTypesWithCategoryResponse: GetAuditActivityTypesWithCategoryResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditActivityTypesWithCategoryResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", getAuditActivityTypesWithCategoryResponse.value);
}
