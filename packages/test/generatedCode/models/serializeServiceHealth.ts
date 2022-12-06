import {ServiceHealth} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealth(writer: SerializationWriter, serviceHealth: ServiceHealth | undefined = {}) : void {
        serializeEntity(writer, serviceHealth)
            writer.writeCollectionOfObjectValuesFromMethod("issues", serviceHealth.issues as any, serializeServiceHealthIssue);
            writer.writeStringValue("service", serviceHealth.service);
            writer.writeEnumValue<ServiceHealthStatus>("status", serviceHealth.status);
}
