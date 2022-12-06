import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import {PurgeDataPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePurgeDataPostRequestBody(writer: SerializationWriter, purgeDataPostRequestBody: PurgeDataPostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<PurgeAreas>("purgeAreas", purgeDataPostRequestBody.purgeAreas);
            writer.writeEnumValue<PurgeType>("purgeType", purgeDataPostRequestBody.purgeType);
}
