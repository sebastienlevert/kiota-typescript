import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {CheckMemberGroupsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberGroupsResponse(checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkMemberGroupsResponse),
        "value": n => { checkMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
