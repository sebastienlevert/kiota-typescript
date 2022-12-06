import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AppScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppScope(appScope: AppScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appScope),
        "displayName": n => { appScope.displayName = n.getStringValue() as any ; },
        "type": n => { appScope.type = n.getStringValue() as any ; },
    }
}
