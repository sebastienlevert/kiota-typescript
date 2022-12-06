import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {DataSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSource(dataSource: DataSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSource),
        "createdBy": n => { dataSource.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { dataSource.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { dataSource.displayName = n.getStringValue() as any ; },
        "holdStatus": n => { dataSource.holdStatus = n.getEnumValue<DataSourceHoldStatus>(DataSourceHoldStatus) as any ; },
    }
}
