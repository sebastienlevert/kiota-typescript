import {PrintOperationStatus} from './index';
import {PrintOperationProcessingState} from './printOperationProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperationStatus(writer: SerializationWriter, printOperationStatus: PrintOperationStatus | undefined = {}) : void {
            writer.writeStringValue("description", printOperationStatus.description);
            writer.writeStringValue("@odata.type", printOperationStatus.odataType);
            writer.writeEnumValue<PrintOperationProcessingState>("state", printOperationStatus.state);
}
