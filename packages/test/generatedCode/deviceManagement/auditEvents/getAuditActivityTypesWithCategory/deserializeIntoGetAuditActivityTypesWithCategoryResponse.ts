import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetAuditActivityTypesWithCategoryResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAuditActivityTypesWithCategoryResponse(getAuditActivityTypesWithCategoryResponse: GetAuditActivityTypesWithCategoryResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAuditActivityTypesWithCategoryResponse),
        "value": n => { getAuditActivityTypesWithCategoryResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
