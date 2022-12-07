import {deserializeIntoStoragePlanInformation} from './deserializeIntoStoragePlanInformation';
import {Quota} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuota(quota: Quota | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "deleted": n => { quota.deleted = n.getNumberValue() as any ; },
        "remaining": n => { quota.remaining = n.getNumberValue() as any ; },
        "state": n => { quota.state = n.getStringValue() as any ; },
        "storagePlanInformation": n => { quota.storagePlanInformation = n.getObject(deserializeIntoStoragePlanInformation) as any ; },
        "total": n => { quota.total = n.getNumberValue() as any ; },
        "used": n => { quota.used = n.getNumberValue() as any ; },
    }
}
