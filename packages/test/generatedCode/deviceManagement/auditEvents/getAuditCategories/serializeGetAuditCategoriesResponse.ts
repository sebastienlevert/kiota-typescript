import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAuditCategoriesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditCategoriesResponse(writer: SerializationWriter, getAuditCategoriesResponse: GetAuditCategoriesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditCategoriesResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", getAuditCategoriesResponse.value);
}
