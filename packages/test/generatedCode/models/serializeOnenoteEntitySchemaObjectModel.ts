import {OnenoteEntitySchemaObjectModel} from './index';
import {serializeOnenoteEntityBaseModel} from './serializeOnenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntitySchemaObjectModel(writer: SerializationWriter, onenoteEntitySchemaObjectModel: OnenoteEntitySchemaObjectModel | undefined = {}) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteEntitySchemaObjectModel)
            writer.writeDateValue("createdDateTime", onenoteEntitySchemaObjectModel.createdDateTime);
}
