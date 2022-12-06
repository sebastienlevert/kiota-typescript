import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {deserializeIntoResultInfo} from '../deserializeIntoResultInfo';
import {CaseAction} from './caseAction';
import {CaseOperationStatus} from './caseOperationStatus';
import {CaseOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseOperation(caseOperation: CaseOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(caseOperation),
        "action": n => { caseOperation.action = n.getEnumValue<CaseAction>(CaseAction) as any ; },
        "completedDateTime": n => { caseOperation.completedDateTime = n.getDateValue() as any ; },
        "createdBy": n => { caseOperation.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { caseOperation.createdDateTime = n.getDateValue() as any ; },
        "percentProgress": n => { caseOperation.percentProgress = n.getNumberValue() as any ; },
        "resultInfo": n => { caseOperation.resultInfo = n.getObject(deserializeIntoResultInfo) as any ; },
        "status": n => { caseOperation.status = n.getEnumValue<CaseOperationStatus>(CaseOperationStatus) as any ; },
    }
}
