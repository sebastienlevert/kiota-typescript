import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import {PurgeDataPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPurgeDataPostRequestBody(purgeDataPostRequestBody: PurgeDataPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "purgeAreas": n => { purgeDataPostRequestBody.purgeAreas = n.getEnumValue<PurgeAreas>(PurgeAreas) as any ; },
        "purgeType": n => { purgeDataPostRequestBody.purgeType = n.getEnumValue<PurgeType>(PurgeType) as any ; },
    }
}
