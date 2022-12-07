import {Quota} from './index';
import {serializeStoragePlanInformation} from './serializeStoragePlanInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuota(writer: SerializationWriter, quota: Quota | undefined = {}) : void {
            writer.writeNumberValue("deleted", quota.deleted);
            writer.writeNumberValue("remaining", quota.remaining);
            writer.writeStringValue("state", quota.state);
            writer.writeObjectValueFromMethod("storagePlanInformation", quota.storagePlanInformation as any, serializeStoragePlanInformation);
            writer.writeNumberValue("total", quota.total);
            writer.writeNumberValue("used", quota.used);
}
