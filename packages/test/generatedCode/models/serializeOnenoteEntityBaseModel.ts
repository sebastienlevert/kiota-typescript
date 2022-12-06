import {OnenoteEntityBaseModel} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntityBaseModel(writer: SerializationWriter, onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {}) : void {
        serializeEntity(writer, onenoteEntityBaseModel)
            writer.writeStringValue("self", onenoteEntityBaseModel.self);
}
