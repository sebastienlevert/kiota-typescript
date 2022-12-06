import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContentType} from '../../../../../../models/deserializeIntoContentType';
import {GetCompatibleHubContentTypesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompatibleHubContentTypesResponse(getCompatibleHubContentTypesResponse: GetCompatibleHubContentTypesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getCompatibleHubContentTypesResponse),
        "value": n => { getCompatibleHubContentTypesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentType) as any ; },
    }
}
