import {VisualProperties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVisualProperties(visualProperties: VisualProperties | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "body": n => { visualProperties.body = n.getStringValue() as any ; },
        "title": n => { visualProperties.title = n.getStringValue() as any ; },
    }
}
