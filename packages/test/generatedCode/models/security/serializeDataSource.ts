import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {DataSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSource(writer: SerializationWriter, dataSource: DataSource | undefined = {}) : void {
        serializeEntity(writer, dataSource)
            writer.writeObjectValueFromMethod("createdBy", dataSource.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", dataSource.createdDateTime);
            writer.writeStringValue("displayName", dataSource.displayName);
            writer.writeEnumValue<DataSourceHoldStatus>("holdStatus", dataSource.holdStatus);
}
