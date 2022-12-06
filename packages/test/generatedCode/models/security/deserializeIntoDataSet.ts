import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {DataSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSet(dataSet: DataSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataSet),
        "createdBy": n => { dataSet.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { dataSet.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { dataSet.displayName = n.getStringValue() as any ; },
    }
}
