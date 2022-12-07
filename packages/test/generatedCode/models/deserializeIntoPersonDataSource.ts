import {PersonDataSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonDataSource(personDataSource: PersonDataSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "type": n => { personDataSource.type = n.getStringValue() as any ; },
    }
}
