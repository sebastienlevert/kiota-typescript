import {OnenotePatchContentCommand} from './index';
import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePatchContentCommand(onenotePatchContentCommand: OnenotePatchContentCommand | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "action": n => { onenotePatchContentCommand.action = n.getEnumValue<OnenotePatchActionType>(OnenotePatchActionType) as any ; },
        "content": n => { onenotePatchContentCommand.content = n.getStringValue() as any ; },
        "@odata.type": n => { onenotePatchContentCommand.odataType = n.getStringValue() as any ; },
        "position": n => { onenotePatchContentCommand.position = n.getEnumValue<OnenotePatchInsertPosition>(OnenotePatchInsertPosition) as any ; },
        "target": n => { onenotePatchContentCommand.target = n.getStringValue() as any ; },
    }
}
