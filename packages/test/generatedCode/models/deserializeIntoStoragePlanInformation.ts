import {StoragePlanInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStoragePlanInformation(storagePlanInformation: StoragePlanInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "upgradeAvailable": n => { storagePlanInformation.upgradeAvailable = n.getBooleanValue() as any ; },
    }
}
