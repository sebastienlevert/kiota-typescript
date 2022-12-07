import {StoragePlanInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStoragePlanInformation(writer: SerializationWriter, storagePlanInformation: StoragePlanInformation | undefined = {}) : void {
            writer.writeBooleanValue("upgradeAvailable", storagePlanInformation.upgradeAvailable);
}
