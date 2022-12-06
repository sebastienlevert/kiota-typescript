import {DataPolicyOperationStatus} from './dataPolicyOperationStatus';
import {DataPolicyOperation} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataPolicyOperation(writer: SerializationWriter, dataPolicyOperation: DataPolicyOperation | undefined = {}) : void {
        serializeEntity(writer, dataPolicyOperation)
            writer.writeDateValue("completedDateTime", dataPolicyOperation.completedDateTime);
            writer.writeNumberValue("progress", dataPolicyOperation.progress);
            writer.writeEnumValue<DataPolicyOperationStatus>("status", dataPolicyOperation.status);
            writer.writeStringValue("storageLocation", dataPolicyOperation.storageLocation);
            writer.writeDateValue("submittedDateTime", dataPolicyOperation.submittedDateTime);
            writer.writeStringValue("userId", dataPolicyOperation.userId);
}
