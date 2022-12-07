import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOperationError} from './deserializeIntoOperationError';
import {TeamsAsyncOperation} from './index';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAsyncOperation(teamsAsyncOperation: TeamsAsyncOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAsyncOperation),
        "attemptsCount": n => { teamsAsyncOperation.attemptsCount = n.getNumberValue() as any ; },
        "createdDateTime": n => { teamsAsyncOperation.createdDateTime = n.getDateValue() as any ; },
        "error": n => { teamsAsyncOperation.error_escaped = n.getObject(deserializeIntoOperationError) as any ; },
        "lastActionDateTime": n => { teamsAsyncOperation.lastActionDateTime = n.getDateValue() as any ; },
        "operationType": n => { teamsAsyncOperation.operationType = n.getEnumValue<TeamsAsyncOperationType>(TeamsAsyncOperationType) as any ; },
        "status": n => { teamsAsyncOperation.status = n.getEnumValue<TeamsAsyncOperationStatus>(TeamsAsyncOperationStatus) as any ; },
        "targetResourceId": n => { teamsAsyncOperation.targetResourceId = n.getStringValue() as any ; },
        "targetResourceLocation": n => { teamsAsyncOperation.targetResourceLocation = n.getStringValue() as any ; },
    }
}
