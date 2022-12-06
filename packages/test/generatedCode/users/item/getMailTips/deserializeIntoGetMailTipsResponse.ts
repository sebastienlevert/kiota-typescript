import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMailTips} from '../../../models/deserializeIntoMailTips';
import {GetMailTipsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMailTipsResponse(getMailTipsResponse: GetMailTipsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMailTipsResponse),
        "value": n => { getMailTipsResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMailTips) as any ; },
    }
}
