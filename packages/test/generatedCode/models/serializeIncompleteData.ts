import {IncompleteData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncompleteData(writer: SerializationWriter, incompleteData: IncompleteData | undefined = {}) : void {
            writer.writeDateValue("missingDataBeforeDateTime", incompleteData.missingDataBeforeDateTime);
            writer.writeStringValue("@odata.type", incompleteData.odataType);
            writer.writeBooleanValue("wasThrottled", incompleteData.wasThrottled);
}
