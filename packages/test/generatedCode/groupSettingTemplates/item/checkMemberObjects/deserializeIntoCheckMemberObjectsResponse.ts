import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {CheckMemberObjectsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberObjectsResponse(checkMemberObjectsResponse: CheckMemberObjectsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkMemberObjectsResponse),
        "value": n => { checkMemberObjectsResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
