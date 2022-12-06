import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {DataSourceContainer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSourceContainer(dataSourceContainer: DataSourceContainer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSourceContainer),
        "createdDateTime": n => { dataSourceContainer.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { dataSourceContainer.displayName = n.getStringValue() as any ; },
        "holdStatus": n => { dataSourceContainer.holdStatus = n.getEnumValue<DataSourceHoldStatus>(DataSourceHoldStatus) as any ; },
        "lastModifiedDateTime": n => { dataSourceContainer.lastModifiedDateTime = n.getDateValue() as any ; },
        "releasedDateTime": n => { dataSourceContainer.releasedDateTime = n.getDateValue() as any ; },
        "status": n => { dataSourceContainer.status = n.getEnumValue<DataSourceContainerStatus>(DataSourceContainerStatus) as any ; },
    }
}
