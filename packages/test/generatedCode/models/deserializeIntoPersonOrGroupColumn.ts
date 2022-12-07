import {PersonOrGroupColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonOrGroupColumn(personOrGroupColumn: PersonOrGroupColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleSelection": n => { personOrGroupColumn.allowMultipleSelection = n.getBooleanValue() as any ; },
        "chooseFromType": n => { personOrGroupColumn.chooseFromType = n.getStringValue() as any ; },
        "displayAs": n => { personOrGroupColumn.displayAs = n.getStringValue() as any ; },
    }
}
