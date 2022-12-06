import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {serializeResultInfo} from '../serializeResultInfo';
import {CaseAction} from './caseAction';
import {CaseOperationStatus} from './caseOperationStatus';
import {CaseOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCaseOperation(writer: SerializationWriter, caseOperation: CaseOperation | undefined = {}) : void {
        serializeEntity(writer, caseOperation)
            writer.writeEnumValue<CaseAction>("action", caseOperation.action);
            writer.writeDateValue("completedDateTime", caseOperation.completedDateTime);
            writer.writeObjectValueFromMethod("createdBy", caseOperation.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", caseOperation.createdDateTime);
            writer.writeNumberValue("percentProgress", caseOperation.percentProgress);
            writer.writeObjectValueFromMethod("resultInfo", caseOperation.resultInfo as any, serializeResultInfo);
            writer.writeEnumValue<CaseOperationStatus>("status", caseOperation.status);
}
