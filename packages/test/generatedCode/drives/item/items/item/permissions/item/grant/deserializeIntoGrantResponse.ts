import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermission} from '../../../../../../../models/deserializeIntoPermission';
import {GrantResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGrantResponse(grantResponse: GrantResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(grantResponse),
        "value": n => { grantResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermission) as any ; },
    }
}
