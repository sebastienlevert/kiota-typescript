import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetAuditCategoriesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAuditCategoriesResponse(getAuditCategoriesResponse: GetAuditCategoriesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAuditCategoriesResponse),
        "value": n => { getAuditCategoriesResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
