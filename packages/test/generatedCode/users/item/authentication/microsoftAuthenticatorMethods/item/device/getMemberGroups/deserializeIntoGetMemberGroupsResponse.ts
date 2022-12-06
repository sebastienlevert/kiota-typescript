import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetMemberGroupsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberGroupsResponse(getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberGroupsResponse),
        "value": n => { getMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
