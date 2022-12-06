import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceConfigurationAssignment} from '../../../../models/deserializeIntoDeviceConfigurationAssignment';
import {AssignResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignResponse(assignResponse: AssignResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignResponse),
        "value": n => { assignResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationAssignment) as any ; },
    }
}
