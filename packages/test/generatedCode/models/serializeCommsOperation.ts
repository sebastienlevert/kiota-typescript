import {CommsOperation} from './index';
import {OperationStatus} from './operationStatus';
import {serializeEntity} from './serializeEntity';
import {serializeResultInfo} from './serializeResultInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsOperation(writer: SerializationWriter, commsOperation: CommsOperation | undefined = {}) : void {
        serializeEntity(writer, commsOperation)
            writer.writeStringValue("clientContext", commsOperation.clientContext);
            writer.writeObjectValueFromMethod("resultInfo", commsOperation.resultInfo as any, serializeResultInfo);
            writer.writeEnumValue<OperationStatus>("status", commsOperation.status);
}
