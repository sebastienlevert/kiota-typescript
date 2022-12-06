import {ControlScore} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoControlScore(controlScore: ControlScore | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "controlCategory": n => { controlScore.controlCategory = n.getStringValue() as any ; },
        "controlName": n => { controlScore.controlName = n.getStringValue() as any ; },
        "description": n => { controlScore.description = n.getStringValue() as any ; },
        "@odata.type": n => { controlScore.odataType = n.getStringValue() as any ; },
        "score": n => { controlScore.score = n.getNumberValue() as any ; },
    }
}
