import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {DataSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSet(writer: SerializationWriter, dataSet: DataSet | undefined = {}) : void {
        serializeEntity(writer, dataSet)
            writer.writeObjectValueFromMethod("createdBy", dataSet.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", dataSet.createdDateTime);
            writer.writeStringValue("displayName", dataSet.displayName);
}
