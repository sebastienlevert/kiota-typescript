import {StoragePlanInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStoragePlanInformation(writer: SerializationWriter, storagePlanInformation: StoragePlanInformation | undefined = {}) : void {
            writer.writeStringValue("@odata.type", storagePlanInformation.odataType);
            writer.writeBooleanValue("upgradeAvailable", storagePlanInformation.upgradeAvailable);
}
