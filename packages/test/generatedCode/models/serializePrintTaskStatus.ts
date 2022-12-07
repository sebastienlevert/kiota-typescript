import {PrintTaskStatus} from './index';
import {PrintTaskProcessingState} from './printTaskProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskStatus(writer: SerializationWriter, printTaskStatus: PrintTaskStatus | undefined = {}) : void {
            writer.writeStringValue("description", printTaskStatus.description);
            writer.writeEnumValue<PrintTaskProcessingState>("state", printTaskStatus.state);
}
