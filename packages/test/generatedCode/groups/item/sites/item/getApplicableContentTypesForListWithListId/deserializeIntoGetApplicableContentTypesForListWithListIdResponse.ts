import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContentType} from '../../../../../models/deserializeIntoContentType';
import {GetApplicableContentTypesForListWithListIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetApplicableContentTypesForListWithListIdResponse(getApplicableContentTypesForListWithListIdResponse: GetApplicableContentTypesForListWithListIdResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getApplicableContentTypesForListWithListIdResponse),
        "value": n => { getApplicableContentTypesForListWithListIdResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
    }
}
