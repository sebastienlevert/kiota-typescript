import {CreateAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateAction(createAction: CreateAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
