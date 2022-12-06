import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {ServiceHealth} from './index';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealth(serviceHealth: ServiceHealth | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceHealth),
        "issues": n => { serviceHealth.issues = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceHealthIssue) as any ; },
        "service": n => { serviceHealth.service = n.getStringValue() as any ; },
        "status": n => { serviceHealth.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus) as any ; },
    }
}
