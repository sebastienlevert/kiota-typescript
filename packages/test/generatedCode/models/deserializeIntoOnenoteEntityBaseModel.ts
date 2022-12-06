import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnenoteEntityBaseModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityBaseModel(onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onenoteEntityBaseModel),
        "self": n => { onenoteEntityBaseModel.self = n.getStringValue() as any ; },
    }
}
