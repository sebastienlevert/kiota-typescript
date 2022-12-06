import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoPublicError} from '../deserializeIntoPublicError';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {ConnectionOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectionOperation(connectionOperation: ConnectionOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(connectionOperation),
        "error": n => { connectionOperation.error_escaped = n.getObject(deserializeIntoPublicError) as any ; },
        "status": n => { connectionOperation.status = n.getEnumValue<ConnectionOperationStatus>(ConnectionOperationStatus) as any ; },
    }
}
