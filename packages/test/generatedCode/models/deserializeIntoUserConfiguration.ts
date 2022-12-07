import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserConfiguration(userConfiguration: UserConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userConfiguration),
        "binaryData": n => { userConfiguration.binaryData = n.getStringValue() as any ; },
    }
}
